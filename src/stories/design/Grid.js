export const Grid = () => `
  <div class="container">
    <h2 class="mb-base">Bootstrap 3 style grid</h2>
    
    <div class="row">
      <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-4</div>
      <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-4</div>
      <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-4</div>
    </div>
    <div class="row">
      <div class="col-2 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-2</div>
      <div class="col-8 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-8</div>
      <div class="col-2 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-2</div>
    </div>
    <div class="row">
      <div class="col-3 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-3</div>
      <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-4</div>
      <div class="col-5 border border-dashed border-grey-25 bg-grey-15 p-2xs">.col-5</div>
    </div>
    <div class="row mb-base">
      <div class="col border border-dashed border-grey-25 bg-grey-15 p-2xs">.col</div>
      <div class="col border border-dashed border-grey-25 bg-grey-15 p-2xs">.col</div>
      <div class="col border border-dashed border-grey-25 bg-grey-15 p-2xs">.col</div>
      <div class="col border border-dashed border-grey-25 bg-grey-15 p-2xs">.col</div>
      <div class="col border border-dashed border-grey-25 bg-grey-15 p-2xs">.col</div>
    </div>
    
    <h2 class="mb-base">Responsive columns</h2>
    <div class="rounded bg-grey-15 mb-base p-sm">
      <h6>Breakpoints:</h6>
      <ul class="pl-base">
        <li><strong>xs</strong>: >480px</li>
        <li><strong>sm</strong>: >768px</li>
        <li><strong>md</strong>: >992px</li>
        <li><strong>lg</strong>: >1200px</li>
      </ul>
    </div>
    
    <div class="row">
      <div class="md:col-4 sm:col-8 border border-dashed border-grey-25 bg-grey-15 p-2xs">.md:col-4 .sm:col-8</div>
      <div class="md:col-8 sm:col-4 border border-dashed border-grey-25 bg-grey-15 p-2xs">.md:col-8  .sm:col-4</div>
    </div>
    <div class="row">
      <div class="md:col-6 sm:col-3 border border-dashed border-grey-25 bg-grey-15 p-2xs">.md:col-6 .sm:col-3</div>
      <div class="md:col-6 sm:col-9 border border-dashed border-grey-25 bg-grey-15 p-2xs"> .md:col-6  .sm:col-9</div>
    </div>
    
  </div>
`
