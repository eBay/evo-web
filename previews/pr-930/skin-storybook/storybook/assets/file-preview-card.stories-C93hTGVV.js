const i={title:"Skin/File Preview Card",decorators:[e=>`
            <div style="width: 168px">
                ${e()}
            </div>
        `]},s=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <span class="progress-spinner progress-spinner--large file-preview-card__asset" aria-label="Busy" role="img">
                <svg class="icon icon--30" aria-hidden="true">
                    <use href="#icon-spinner-30"></use>
                </svg>
            </span>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Cancel upload">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
    </div>
`,a=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`,c=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`,r=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <span class="file-preview-card__asset" style="height: 100%; width: 100%; background-image: url('https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg'); background-repeat: no-repeat; background-position: center; background-size: contain;"></span>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`,t=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </div>
`,o=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <video class="file-preview-card__asset" src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"></video>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                0:21
            </div>
        </div>
    </div>
`,n=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body" dir="rtl">
            <video class="file-preview-card__asset" src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"></video>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                0:21
            </div>
        </div>
    </div>
`,d=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <svg class="icon file-preview-card__asset" aria-hidden="true">
                <use href="#icon-file-24"></use>
            </svg>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                CSV
            </div>
        </div>
    </div>
`,l=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset file-preview-card__asset--fade" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="file-preview-card__see-more" type="button">
                <span>+15</span>
            </button>
        </div>
    </div>
`,v=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body" dir="rtl">
            <img class="file-preview-card__asset file-preview-card__asset--fade" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="file-preview-card__see-more" type="button">
                <span>+15</span>
            </button>
        </div>
    </div>
`,p=()=>`
    <div class="file-preview-card">
        <div class="file-preview-card__body">
            <svg class="icon file-preview-card__asset" aria-hidden="true">
                <use href="#icon-file-24"></use>
            </svg>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                CSV
            </div>
        </div>
        <div class="file-preview-card__footer">
          <span>countries.csv</span>
          <span>English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
        </div>
    </div>
`,u=["uploading","squareImage","portraitImage","portraitWithCSSImageContainBackground","landscapeImage","video","videoRTL","document","seeMore","seeMoreRTL","withDescription"];export{u as __namedExportsOrder,i as default,d as document,t as landscapeImage,c as portraitImage,r as portraitWithCSSImageContainBackground,l as seeMore,v as seeMoreRTL,a as squareImage,s as uploading,o as video,n as videoRTL,p as withDescription};
