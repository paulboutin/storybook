export const Grid = () => `
  <div class="container">
    <h2 class="mb-base">Bootstrap 3 style grid</h2>
      <div class="rounded bg-grey-15 mb-base p-sm">
        <p>This is a 12-column system based on flexbox, and can be used in a similar fashion to bootstrap 3 by using <code>.col-{n}</code> and substituting n with a number between 1 and 12.</p>
        <p class="mt-base">Usage example</p>
        <code>
          <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">row</span>"&gt;<br></span>
            <span class="pl-xl">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">col-6</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
            <span class="pl-xl">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">col-6</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
          <span class="pl-base">&lt;/<span class="text-error">div</span>&gt;</span>
        </code>
      </div>
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
      <p>Breakpoints</p>
      <code>
        <ul class="pl-base">
          <li><strong>xs</strong>: >480px</li>
          <li><strong>sm</strong>: >768px</li>
          <li><strong>md</strong>: >992px</li>
          <li><strong>lg</strong>: >1200px</li>
        </ul>
      </code>
      <br>
      <p>Breakpoints are selected by prefixing the breakpoint to the column class <code>{breakpoint}:col-{n}</code></p>
      <p class="mt-base">Usage example</p>
      <code class="pl-base">
        &lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">xs:col-6 md:col-4 lg:col-3</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;
      </code>
      <p class="mt-base">Keep in mind that responsive classes are defined to <strong>defeat</strong> non-responsive classes.</p>
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
