const v={title:"Skin/Progress Stepper"},s=()=>`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
`,e=()=>`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
`,r=()=>`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`,p=()=>`
<div class="progress-stepper">
    <div class="progress-stepper__items  progress-stepper__items--upcoming" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`,t=()=>`
<div class="progress-stepper" dir="rtl">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`,i=()=>`
<div class="progress-stepper demo-a11y-text-spacing">
    <div class="progress-stepper__items" role="list">
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
`,n=()=>`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
           <span class="progress-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
`,a=()=>`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div aria-current="current" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
           <span class="progress-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
`,o=()=>`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Delivered</h3>
            </span>
        </div>
    </div>
</div>
`,l=()=>`
<div dir="rtl">
    <div class="progress-stepper progress-stepper--vertical">
        <div class="progress-stepper__items" role="list">
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Order placed</h3>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Preparing for shipment</h3>
                    <p>We will notify you once it ships.</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Delivered</h3>
                    <p>Guaranteed Wednesday, October 09.</p>
                </span>
            </div>
        </div>
    </div>
</div>
`,c=()=>`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--attention" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-attention-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Blocked</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`,g=()=>`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--attention" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-attention-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Blocked</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>`,h=()=>`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`,_=()=>`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items  progress-stepper__items--upcoming" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
`,d=()=>`
<div style="width: 320px">
    <div class="progress-stepper">
        <div class="progress-stepper__items" role="list">
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Gestartet</h4>
                    <p>July 3rd</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Verschicken</h4>
                    <p>bis 27. Jan</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
                <span class="progress-stepper__text">
                    <h4>Ruckerstattung</h4>
                </span>
            </div>

        </div>
    </div>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
\``,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
\``,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper">
    <div class="progress-stepper__items  progress-stepper__items--upcoming" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
\``,...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper" dir="rtl">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper demo-a11y-text-spacing">
    <div class="progress-stepper__items" role="list">
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                <use href="#icon-stepper-upcoming-24"></use>
            </svg>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>

    </div>
</div>
\``,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
           <span class="progress-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
\``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div aria-current="current" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
                <p>New Mens Addidas Ultra Boost</p>
                <p>Order total $220</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
                <p>We will notify you once it ships.</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
           <span class="progress-stepper__text">
                <h3>Delivered</h3>
                <p>Guaranteed Wednesday, October 09.</p>
            </span>
        </div>
    </div>
</div>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Order placed</h3>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Preparing for shipment</h3>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h3>Delivered</h3>
            </span>
        </div>
    </div>
</div>
\``,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <div class="progress-stepper progress-stepper--vertical">
        <div class="progress-stepper__items" role="list">
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Order placed</h3>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Preparing for shipment</h3>
                    <p>We will notify you once it ships.</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
                </span>
                <span class="progress-stepper__text">
                    <h3>Delivered</h3>
                    <p>Guaranteed Wednesday, October 09.</p>
                </span>
            </div>
        </div>
    </div>
</div>
\``,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--attention" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-attention-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Blocked</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>\``,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div aria-current="step" class="progress-stepper__item progress-stepper__item--attention" role="listitem">
            <span class="progress-stepper__icon">
                <svg aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-attention-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Blocked</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>\``,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                    <use href="#icon-stepper-confirmation-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
\``,...h.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => \`
<div class="progress-stepper progress-stepper--vertical">
    <div class="progress-stepper__items  progress-stepper__items--upcoming" role="list">
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Started</h4>
                <p>July 3rd</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Shipped</h4>
                <p>July 4th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Transit</h4>
                <p>July 5th</p>
            </span>
        </div>
        <hr class="progress-stepper__separator" role="presentation" />
        <div class="progress-stepper__item" role="listitem">
            <span class="progress-stepper__icon">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
            </span>
            <span class="progress-stepper__text">
                <h4>Delivered</h4>
                <p>July 6th</p>
            </span>
        </div>
    </div>
</div>
\``,..._.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<div style="width: 320px">
    <div class="progress-stepper">
        <div class="progress-stepper__items" role="list">
            <div class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Gestartet</h4>
                    <p>July 3rd</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div aria-current="step" class="progress-stepper__item" role="listitem">
                <span class="progress-stepper__icon">
                    <svg role="img" aria-hidden="true" class="icon" height="24" width="24">
                        <use href="#icon-stepper-confirmation-24"></use>
                    </svg>
                </span>
                <span class="progress-stepper__text">
                    <h4>Verschicken</h4>
                    <p>bis 27. Jan</p>
                </span>
            </div>
            <hr class="progress-stepper__separator" role="presentation" />
            <div class="progress-stepper__item" role="listitem">
                <svg role="img" aria-label="upcoming" class="icon" height="24" width="24">
                    <use href="#icon-stepper-upcoming-24"></use>
                </svg>
                <span class="progress-stepper__text">
                    <h4>Ruckerstattung</h4>
                </span>
            </div>

        </div>
    </div>
</div>
\``,...d.parameters?.docs?.source}}};const m=["base","multipleUpcoming","allSelected","noneSelected","RTL","textSpacing","vertical","verticalUpcoming","verticalSingleLine","verticalRTL","errorState","errorStateVertical","allSelectedVertical","noneSelectedVertical","smallScreens"];export{t as RTL,m as __namedExportsOrder,r as allSelected,h as allSelectedVertical,s as base,v as default,c as errorState,g as errorStateVertical,e as multipleUpcoming,p as noneSelected,_ as noneSelectedVertical,d as smallScreens,i as textSpacing,n as vertical,l as verticalRTL,o as verticalSingleLine,a as verticalUpcoming};
