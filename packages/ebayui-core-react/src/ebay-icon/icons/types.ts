import type { FC, ComponentProps } from 'react';
import type EbayIcon from '../icon';

export type EbayIconComponentProps = Omit<ComponentProps<typeof EbayIcon>, 'name' | '__type' | '__symbol'>;
export type EbayIconComponent = FC<EbayIconComponentProps>;