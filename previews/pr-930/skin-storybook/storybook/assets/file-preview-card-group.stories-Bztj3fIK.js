const c={title:"Skin/File Preview Card Group"},e=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`,i=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`,a=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`,r=()=>`
    <li class="file-preview-card">
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
    </li>
`,s=()=>`
    <li class="file-preview-card">
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
    </li>
`,t=()=>`
    <div class="file-preview-card-group">
        <ul>
            ${e().repeat(28)}
        </ul>
    </div>
`,d=()=>`
    <div class="file-preview-card-group">
        <ul>
            ${s()}
            ${e()}
            ${i()}
            ${r()}
            ${a()}
        </ul>
    </div>
`,l=()=>`
    <div class="file-preview-card-group" dir="rtl">
        <ul>
            ${s()}
            ${e()}
            ${i()}
            ${r()}
            ${a()}
        </ul>
    </div>
`,o=()=>`
    <div style="width: 320px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,n=()=>`
    <div style="width: 512px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,v=()=>`
    <div style="width: 768px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,p=()=>`
    <div style="width: 1024px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,u=()=>`
    <div style="width: 1280px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,g=()=>`
    <div style="width: 1440px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,h=()=>`
    <div style="width: 1680px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,w=()=>`
    <div style="width: 1920px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,_=["base","mixedTypesWithDetails","RTL","_320container","_512container","_768container","_1024container","_1280container","_1440container","_1680container","_1920container"];export{l as RTL,p as _1024container,u as _1280container,g as _1440container,h as _1680container,w as _1920container,o as _320container,n as _512container,v as _768container,_ as __namedExportsOrder,t as base,c as default,d as mixedTypesWithDetails};
