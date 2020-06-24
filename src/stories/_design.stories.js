export default {
  title: 'Design System'
}

export const Download = () => `
  <a href='/styles.zip' class='link'>Download styles</a>
`

export const Colors = () => `
  <div class='flex flex-wrap m-auto'>
    <div class='w-full sm:w-1/2 md:w-1/3 p-sm'>
      <div class='max-w-xs m-auto p-base border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2xs'>Green</h4>
        <div class='bg-green text-white text-center rounded py-xs mb-2xs'>Base</div>
        <div class='bg-green-light text-white text-center rounded py-xs mb-2xs'>Light</div>
        <div class='bg-green-dark text-white text-center rounded py-xs mb-2xs'>Dark</div>
        <div class='bg-green-darker text-white text-center rounded py-xs'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3 p-sm'>
      <div class='max-w-xs m-auto p-base border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2xs'>Yellow</h4>
        <div class='bg-yellow text-black text-center rounded py-xs mb-2xs'>Base</div>
        <div class='bg-yellow-light text-black text-center rounded py-xs mb-2xs'>Light</div>
        <div class='bg-yellow-dark text-black text-center rounded py-xs mb-2xs'>Dark</div>
        <div class='bg-yellow-darker text-black text-center rounded py-xs'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3 p-sm'>
      <div class='max-w-xs m-auto p-base border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2xs'>Blue</h4>
        <div class='bg-blue text-white text-center rounded py-xs mb-2xs'>Base</div>
        <div class='bg-blue-light text-white text-center rounded py-xs mb-2xs'>Light</div>
        <div class='bg-blue-dark text-white text-center rounded py-xs mb-2xs'>Dark</div>
        <div class='bg-blue-darker text-white text-center rounded py-xs'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3 p-sm'>
      <div class='max-w-xs m-auto mb-2xs p-base border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2xs'>Greyscale</h4>
        <div class='bg-black text-white text-center rounded py-xs mb-2xs'>Black</div>
        <div class='bg-grey text-white text-center rounded py-xs mb-2xs'>Grey</div>
        <div class='bg-grey-85 text-white text-center rounded py-xs mb-2xs'>85%</div>
        <div class='bg-grey-70 text-white text-center rounded py-xs mb-2xs'>70%</div>
        <div class='bg-grey-55 text-white text-center rounded py-xs mb-2xs'>55%</div>
        <div class='bg-grey-40 text-black text-center rounded py-xs mb-2xs'>40%</div>
        <div class='bg-grey-25 text-black text-center rounded py-xs mb-2xs'>25%</div>
        <div class='bg-grey-15 text-black text-center rounded py-xs mb-2xs'>15%</div>
        <div class='bg-white text-black text-center rounded py-xs border border-grey-25'>White</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3 p-sm'>
      <div class='max-w-xs m-auto p-base border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2xs'>Success</h4>
        <div class='bg-success text-white text-center rounded py-xs mb-2xs'>Base</div>
        <div class='bg-success-light text-white text-center rounded py-xs mb-2xs'>Light</div>
        <div class='bg-success-dark text-white text-center rounded py-xs mb-2xs'>Dark</div>
        <div class='bg-success-darker text-white text-center rounded py-xs'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3 p-sm'>
      <div class='max-w-xs m-auto p-base border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2xs'>Error</h4>
        <div class='bg-error text-white text-center rounded py-xs mb-2xs'>Base</div>
        <div class='bg-error-light text-white text-center rounded py-xs mb-2xs'>Light</div>
        <div class='bg-error-dark text-white text-center rounded py-xs mb-2xs'>Dark</div>
        <div class='bg-error-darker text-white text-center rounded py-xs'>Darker</div>
      </div>
    </div>
  </div>
`

export const Typography = () => `
  <div class='container'>
    <h2 class="mb-sm">Headings</h2>
    <div class="rounded bg-grey-15 mb-base p-sm">
      <p>
          Headings are configured by default and require no further styling.
      </p>
      <p class="mt-base">Usage example</p>
      <code>
          <span class="pl-base">&lt;<span class="text-error">h1</span>&gt;...&lt;/<span class="text-error">h1</span>&gt;</span><br>
      </code>
    </div>
    <p class='text-grey-55 text-xs'>Heading 1</p>
    <h1 class='mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h1>
    
    <p class='text-grey-55 text-xs'>Heading 2</p>
    <h2 class='mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h2>
    
    <p class='text-grey-55 text-xs'>Heading 3</p>
    <h3 class='mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h3>
    
    <p class='text-grey-55 text-xs'>Heading 4</p>
    <h4 class='mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h4>
    
    <p class='text-grey-55 text-xs'>Heading 5</p>
    <h5 class='mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h5>
    
    <p class='text-grey-55 text-xs'>Heading 6</p>
    <h6 class='mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h6>
    
    <h2 class="mb-sm">Base</h2>
    <div class="rounded bg-grey-15 mb-base p-sm">
      <p>
          Text sizes can be modified with the class <code>.text-{size}</code>, 
          where size is any of the following: xs, sm, md, lg, h1, h2, h3, h4, h5 or h6.
          
      </p>
      <p class="mt-base">Usage example</p>
      <code>
          <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">text-lg</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span>
      </code>
    </div>
    <p class='text-grey-55 text-xs'>Body large</p>
    <div class='text-lg mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
    
    <p class='text-grey-55 text-xs'>Body base</p>
    <div class='text-base mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
    
    <p class='text-grey-55 text-xs'>Body small</p>
    <div class='text-sm mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
    
    <p class='text-grey-55 text-xs'>Body extra small</p>
    <div class='text-xs mb-base'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
  </div>
`

export const Spacing = () => `
<div class='container'>
  <h2 class="mb-sm">Sizes</h2>
  <div class="rounded bg-grey-15 mb-base p-sm">
    <p>
        Sizing is based on an 8pt system. 
        Valid values include: 2, 4, 8, 12, 16, 24, 32, 48, 64, 96 and 160.
    </p>
    <p class="mt-base">
        Width and height classes are defined as <code>.w-{n}</code> and <code>.h-{n}</code> respectively,
        where <code>n</code> corresponds to the pixel value from the system.
    </p>
    <p class="mt-base">Usage example</p>
    <code class="pl-base">
        &lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">w-base h-lg</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;
    </code>
  </div>
  <div class="flex flex-wrap w-full justify-between items-end mb-64">
    <span class="block w-3xs h-3xs bg-grey"></span>
    <span class="block w-2xs h-2xs bg-grey"></span>
    <span class="block w-xs h-xs bg-grey"></span>
    <span class="block w-sm h-sm bg-grey"></span>
    <span class="block w-base h-base bg-grey"></span>
    <span class="block w-lg h-lg bg-grey"></span>
    <span class="block w-xl h-xl bg-grey"></span>
    <span class="block w-2xl h-2xl bg-grey"></span>
    <span class="block w-3xl h-3xl bg-grey"></span>
    <span class="block w-4xl h-4xl bg-grey"></span>
    <span class="block w-5xl h-5xl bg-grey"></span>
  </div>
  
  <h2 class="mb-sm">Padding</h2>
  <div class="rounded bg-grey-15 mb-base p-sm">
    <p>
        Padding is defined as <code>.p-{n}</code> for symmetrical padding, or <code>.p{side}-{n}</code>
        where <code>side</code> corresponds to l, r, t or b for the corresponding side, and x or y for horizontal o vertical spacing.
        Valid values include: 3xs, 2xs, xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl.
    </p>
    <p class="mt-base">Usage example</p>
    <code>
        <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">p-base</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
        <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">pt-16 pr-24</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span>
    </code>
  </div>
  <div class="flex flex-wrap w-full justify-between items-end mb-64">
    <span class="border p-3xs">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-2xs">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-xs">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-sm">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-base">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-lg">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-xl">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-2xl">
      <span class="block w-base h-base bg-grey"></span>
    </span>
    <span class="border p-3xl">
      <span class="block w-base h-base bg-grey"></span>
    </span>
  </div>
  
  <h2 class="mb-sm">Margins</h2>
  <div class="rounded bg-grey-15 mb-base p-sm">
    <p>
        Margin is defined as <code>.m-{n}</code> for symmetrical margins, or <code>.m{side}-{n}</code>
        where <code>side</code> corresponds to l, r, t or b for the corresponding side, and x or y for horizontal o vertical spacing.
        Valid values include: 3xs, 2xs, xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl.
    </p>
    <p class="mt-base">Usage example</p>
    <code>
        <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">m-16</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
        <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">mt-base mr-24</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span>
    </code>
  </div>
  <div class="w-full">
    <p class="mb-3xs bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-2xs bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-xs bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-sm bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-base bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-lg bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-xl bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-2xl bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-3xl bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-4xl bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-5xl bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</div>
`

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
