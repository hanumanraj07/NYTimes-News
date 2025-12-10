const main = document.querySelector('.main'); 
const art1 = document.querySelector('#art1');
const home = document.querySelector('#home');
const us = document.querySelector('#us');
const science = document.querySelector('#science');
const world = document.querySelector('#world');
const All = document.querySelector('#all');
const business = document.querySelector('#business');
const premium = document.querySelector('#premium');
const esports = document.querySelector('#esports');
const movies = document.querySelector('#movies'); 

function informationCard(data) {
  const multimedia = Array.isArray(data.multimedia) ? data.multimedia : [];
  const des        = Array.isArray(data.des_facet) ? data.des_facet : [];
  const org        = Array.isArray(data.org_facet) ? data.org_facet : [];
  const per        = Array.isArray(data.per_facet) ? data.per_facet : [];
  const geo        = Array.isArray(data.geo_facet) ? data.geo_facet : [];

  const mainImage  = multimedia[0]?.url || '';
  const thumb1     = multimedia[1]?.url || '';
  const thumb2     = multimedia[2]?.url || '';

  main.innerHTML += `
  <article class="article-card"> 
    <div class="article-media">
      <img id="main1" src="${mainImage}"
           alt="Article image" />
      <div class="media-overlay"></div>
      <div class="media-meta">
        <span>© Philip Cheung for The New York Times</span>
      </div>
    </div>
 
    <div class="article-body"> 
      <div class="article-section">
        <span>${data.section || ''}</span>
        <span><span class="bullet"></span>${data.subsection || ''}</span>
      </div>
 
      <h1 class="article-title">
        ${data.title || ''}
      </h1>
 
      <p class="article-abstract">
        ${data.abstract || ''}
      </p>
 
      <div class="article-meta">
        <div class="article-meta-item">
          <span class="article-meta-label">Author: </span>
          <span class="article-byline">${data.byline || ''}</span>
        </div>
        <div class="article-meta-item">
          <span class="article-meta-label">Type</span>
          <span>${data.item_type || ''}</span>
        </div>
        <div class="article-meta-item">
          <span class="article-meta-label">Published</span>
          <span>${data.published_date || ''}</span>
        </div>
        <div class="article-meta-item">
          <span class="article-meta-label">Updated</span>
          <span>${data.updated_date || ''}</span>
        </div>
      </div>
 
      <div class="facet-group">
        <div class="facet-title">Description Facets</div>
        <div class="pill-row">
          <span class="pill des">${des[0] || ''}</span>
          <span class="pill des">${des[1] || ''}</span>
          <span class="pill des">${des[2] || ''}</span>
          <span class="pill des">Content Type: ${des[3] || ''}</span>
          <span class="pill des">${des[4] || ''}</span>
        </div>
      </div>

      <div class="facet-group">
        <div class="facet-title">${org[0] || ''}</div>
        <div class="pill-row">
          <span class="pill org">${org[1] || ''}</span>
        </div>
      </div>

      <div class="facet-group">
        <div class="facet-title">${per[0] || ''}</div>
        <div class="pill-row">
          <span class="pill per">${per[1] || ''}</span>
        </div>
      </div>

      <div class="facet-group">
        <div class="facet-title">${geo[0] || ''}</div>
        <div class="pill-row"> 
          <span class="pill geo">${geo[1] || ''}</span>
        </div>
      </div>
 
      <div class="facet-group">
        <div class="facet-title">${multimedia[0]?.type || ''}</div>
        <div class="thumbs">
          <img src="${thumb1}" alt="thumb 1" />
          <img src="${thumb2}" alt="thumb 2" />
        </div>
      </div>
 
      <div class="article-footer">
        <a class="article-link"
           href="${data.url || '#'}"
           target="_blank"
           rel="noopener noreferrer">
          Read on nytimes.com
        </a>
        <div>
          <span class="article-meta-label">URI</span>
          <div class="uri">${data.uri || ''}</div>
        </div>
      </div>
    </div>
  </article>
  `;
}


function information2Card(data) {

  // Safely handle null or missing arrays
  const multimedia = Array.isArray(data.multimedia) ? data.multimedia : [];

  const img0 = multimedia[0]?.url || "";
  const img1 = multimedia[1]?.url || "";
  const img2 = multimedia[2]?.url || "";
  const img3 = multimedia[3]?.url || "";

  const des = Array.isArray(data.des_facet) ? data.des_facet.join(", ") : (data.des_facet || "");
  const org = Array.isArray(data.org_facet) ? data.org_facet.join(", ") : (data.org_facet || "");
  const per = Array.isArray(data.per_facet) ? data.per_facet.join(", ") : (data.per_facet || "");
  const geo = Array.isArray(data.geo_facet) ? data.geo_facet.join(", ") : (data.geo_facet || "");

  main.innerHTML += `
    <article class="article-card"> 
      <div class="article-media">
        <img src="${img2}" alt="Video thumbnail" />
        <div class="media-overlay"></div>

        <div class="media-meta">
          <div><span id="itemtype">${data.item_type || ""}</span> 
          &nbsp;•&nbsp;<span id="source">${data.source || ""}</span></div>

          <div>Published: <span id="publisheddate">${data.published_date || ""}</span></div>

          <div>Slug: <span id="slugname">${data.slug_name || ""}</span></div>
        </div>
      </div>

      <div class="article-body">
        
        <div class="article-section">
          <span id="section">${data.section || ""}</span>
          <span><span class="bullet"></span><span id="subsection">${data.subsection || ""}</span></span>
        </div>

        <h1 class="article-title">
          <span id="slugname">${data.slug_name || ""}</span>
        </h1>

        <p id="abstract" class="article-abstract">
          ${data.abstract || ""}
        </p>

        <div class="article-meta">
          <div class="article-meta-item">
            <span class="article-meta-label">Item Type</span>
            <span id="itemtype">${data.item_type || ""}</span>
          </div>

          <div class="article-meta-item">
            <span class="article-meta-label">Material</span>
            <span id="materialtype">${data.material_type_facet || ""}</span>
          </div>

          <div class="article-meta-item">
            <span class="article-meta-label">Source</span>
            <span id="source">${data.source || ""}</span>
          </div>

          <div class="article-meta-item">
            <span class="article-meta-label">Updated</span>
            <span id="updateddate">${data.updated_date || ""}</span>
          </div>

          <div class="article-meta-item">
            <span class="article-meta-label">Created</span>
            <span id="createddate">${data.created_date || ""}</span>
          </div>

          <div class="article-meta-item">
            <span class="article-meta-label">First Published</span>
            <span id="publisheddate">${data.published_date || ""}</span>
          </div>
        </div>

        <div class="article-meta">
          <div class="article-meta-item">
            <span class="article-meta-label">Byline</span>
            <span id="byline" class="article-byline">${data.byline || ""}</span>
          </div>
        </div>

        <div class="facet-group">
          <div class="facet-title">Descriptive Facets</div>
          <div class="pill-row">
            <span id="des" class="pill des">${des}</span>
          </div>
        </div>

        <div class="facet-group">
          <div class="facet-title">Organizations</div>
          <div class="pill-row">
            <span id="org" class="pill org">${org}</span>
          </div>
        </div>

        <div class="facet-group">
          <div class="facet-title">People</div>
          <div class="pill-row">
            <span id="per" class="pill per">${per}</span>
          </div>
        </div>

        <div class="facet-group">
          <div class="facet-title">Geography</div>
          <div class="pill-row">
            <span id="geo" class="pill geo">${geo}</span>
          </div>
        </div>

        <div class="facet-group">
          <div class="facet-title">Thumbnails</div>
          <div class="thumbs">
            <img src="${img3}" alt="Standard Thumbnail" />
            <img src="${img1}" alt="Medium Thumbnail" />
            <img src="${img2}" alt="Article Inline" />
          </div>
        </div>

        <div class="article-footer">
          <a class="article-link"
             href="${data.url || "#"}"
             target="_blank"
             rel="noopener noreferrer">
            <span>View on NYTimes</span>
          </a>

          <div id="uri" class="uri">${data.uri || ""}</div>
        </div>

      </div>
    </article>
  `;
}


  function loadApi1(section){
    
    main.innerHTML ="";
    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=VKRz30grCvgHXXQKTnL13I6JRf19Usv6`)
    .then((response)=> response.json())
    .then((data)=>{
        for(let i=0; i<data.results.length; i++){

            informationCard(data.results[i])
        }
    })
  }
  
  function loadApi2(path){
    main.innerHTML ="";
    fetch(`https://api.nytimes.com/svc/news/v3/content/${path}.json?api-key=VKRz30grCvgHXXQKTnL13I6JRf19Usv6`)
    .then((response)=> response.json())
    .then((data)=>{
        for(let i=0; i<data.results.length; i++){

            information2Card(data.results[i])
        }
    })
  }
  
  
  let value1 = "arts";
  let value2 = "home";
  let value3 = "science";
  let value4 = "us";
  let value5 = "world";
  let value6 = "all/all";
  let value7 = "nyt/business";
  let value8 = "nyt/world";
  // let value9 = "arts";
  // let value0 = "arts";
  art1.addEventListener('click',()=>{
    loadApi1(value1)});
  home.addEventListener('click',()=>{
    loadApi1(value2)});
 science.addEventListener('click',()=>{
    loadApi1(value3)});
  us.addEventListener('click',()=>{
    loadApi1(value4)});
  world.addEventListener('click',()=>{
    loadApi1(value5)});
  All.addEventListener('click',()=>{
    loadApi2(value6)});
  business.addEventListener('click',()=>{
    loadApi2(value7)});
  premium.addEventListener('click',()=>{
    loadApi2(value8)});
  // esports.addEventListener('click',loadApi9);
  // movies.addEventListener('click',loadApi0);