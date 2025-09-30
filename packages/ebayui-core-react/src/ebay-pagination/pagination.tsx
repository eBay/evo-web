import React, {
    Children,
    ComponentProps,
    FC,
    ReactElement,
    cloneElement,
    useEffect,
    useRef,
    useState,
    createRef,
} from "react";
import { EbayFakeMenuButton, EbayFakeMenuButtonItem as Item } from "../ebay-fake-menu-button";
import classNames from "classnames";
import { debounce } from "../common/debounce";
import { calcPageState, getMaxWidth } from "./helpers";
import { filterBy } from "../common/component-utils";
import { PaginationItemProps, PaginationItemType } from "./pagination-item";
import { ItemState, PaginationVariant } from "./types";
import { EbayIconOverflowHorizontal24 } from "../ebay-icon/icons/ebay-icon-overflow-horizontal-24";
import { EbayEventHandler } from "../common/event-utils/types";

export type PaginationProps = Omit<ComponentProps<"nav">, "onSelect"> & {
    id?: string;
    a11yPreviousText?: string;
    a11yNextText?: string;
    a11yCurrentText?: string;
    onPrevious?: EbayEventHandler;
    onNext?: EbayEventHandler;
    onSelect?: EbayEventHandler<{ value: string; index: number }>;
    variant?: PaginationVariant;
    fluid?: boolean;
};

const EbayPagination: FC<PaginationProps> = ({
    id = "ebay-pagination",
    className,
    a11yCurrentText = "Pagination - Current Page",
    a11yPreviousText = "Previous page",
    a11yNextText = "Next page",
    variant = "show-range",
    fluid = false,
    onPrevious = () => {},
    onNext = () => {},
    onSelect = () => {},
    children,
    ...rest
}) => {
    const paginationContainerRef = useRef<HTMLUnknownElement>(null);
    const childPageRefs = useRef([]);
    childPageRefs.current = Children.map(children, createRef);
    const totalPages = filterBy(
        children,
        ({ props }: ReactElement<PaginationItemProps>) => props.type === undefined || props.type === "page",
    ).length;
    const itemWidthRef = useRef<number>(0);
    const arrowWidthRef = useRef<number>(0);
    const getNumOfVisiblePageItems = () => {
        const pageArrowWidth = arrowWidthRef.current || childPageRefs.current[0]?.current?.offsetWidth;
        arrowWidthRef.current = pageArrowWidth; // cache arrow width since it should be static

        const pageItemWidth = itemWidthRef.current || childPageRefs.current[1]?.current?.offsetWidth;
        itemWidthRef.current = pageItemWidth; // cache item width since it should be static

        return pageItemWidth
            ? Math.floor((getMaxWidth(paginationContainerRef.current) - pageArrowWidth * 2) / pageItemWidth)
            : 0;
    };

    const [page, setPage] = useState<ItemState[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    // selectedPageIndexFromDotMenu: override pageIndex on pagination with dot menu value
    const updatePages = (selectedPageIndexFromDotMenu?: number) => {
        const selectedPageIndex =
            selectedPageIndexFromDotMenu ||
            childPageRefs.current.findIndex((pageRef) => pageRef.current?.getAttribute("aria-current") === "page");
        const visiblePageItems = getNumOfVisiblePageItems();
        const pageState = calcPageState(selectedPageIndex, visiblePageItems, totalPages, variant);
        setSelectedIndex(selectedPageIndex);
        setPage(["hidden", ...pageState]);
    };

    useEffect(() => {
        const debouncedUpdate = debounce(updatePages, 16);

        updatePages();
        window.addEventListener("resize", () => debouncedUpdate());

        return () => {
            window.removeEventListener("resize", () => debouncedUpdate());
        };
    }, [children]);

    const createChildItems = (itemType: PaginationItemType): ReactElement[] => {
        let pageIndex = 0;
        const firstDotItems: ReactElement[] = [];
        const secondDotItems: ReactElement[] = [];
        const allDotItems: ReactElement[] = [];
        const firstDot = page.indexOf("dots");
        const lastDot = page.lastIndexOf("dots");

        return Children.map(children, (item: ReactElement<PaginationItemProps>, index) => {
            const { type = "page", current, disabled, href, children: text } = item.props;
            const isDot = page[index] === "dots";
            const key = `${id}-item-${index}`;
            const hide = page[index] === "hidden";
            const isSeparator = isDot && type === "page";
            const newProps: PaginationItemProps = {
                current,
                disabled,
                href,
                type: isSeparator ? "separator" : type,
                children: isDot ? <EbayIconOverflowHorizontal24 focusable={false} /> : text,
                pageIndex: type === "page" ? pageIndex++ : undefined,
                key,
                hide,
                onPrevious,
                onNext,
                onSelect,
                a11yPreviousText,
                a11yNextText,
                ref: childPageRefs.current[index],
            };
            // include hidden numbers & number of (...)itself
            if ((hide || isDot) && type === "page") {
                const itemComponent = (
                    <Item
                        key={key}
                        href={href}
                        onClick={(event) => {
                            if (!href) {
                                event.preventDefault();
                            }
                            const currentTarget = event.currentTarget as HTMLElement;
                            onSelect(event, { value: currentTarget?.innerText || "", index: pageIndex });
                            updatePages(Number(currentTarget?.innerText));
                        }}
                    >
                        {text}
                    </Item>
                );
                if (firstDot === lastDot) {
                    allDotItems.push(itemComponent);
                }
                if (selectedIndex - 2 > firstDot && index < selectedIndex) {
                    firstDotItems.push(itemComponent);
                }
                if (selectedIndex + 2 < lastDot && index > selectedIndex) {
                    secondDotItems.push(itemComponent);
                }
            }
            if (itemType === "page" && isDot && variant === "overflow") {
                let childComponent = allDotItems;
                if (firstDot !== lastDot) {
                    childComponent = index === 2 ? firstDotItems : secondDotItems;
                }
                return (
                    <li key={key}>
                        <span className="pagination__item" role="separator">
                            <EbayFakeMenuButton a11yText="Menu" borderless variant="overflow" noToggleIcon>
                                {childComponent}
                            </EbayFakeMenuButton>
                        </span>
                    </li>
                );
            }
            return itemType === type ? cloneElement(item, newProps) : null;
        });
    };

    const headingId = `${id}-pagination-heading`;

    return (
        <nav
            {...rest}
            role="navigation"
            className={classNames(className, "pagination", { "pagination--fluid": fluid })}
            aria-labelledby={headingId}
            ref={paginationContainerRef}
        >
            <span aria-live="polite" role="status">
                <h2 className="clipped" id={headingId}>
                    {a11yCurrentText}
                </h2>
            </span>
            {createChildItems("previous")}
            <ol className="pagination__items">{createChildItems("page")}</ol>
            {createChildItems("next")}
        </nav>
    );
};

export default EbayPagination;
