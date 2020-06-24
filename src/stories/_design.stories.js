export default {
  title: 'Design System'
}

export const Download = () => `
  <a href='/styles.zip' class='link'>Download styles</a>
`

export const Colors = () => `
  <div class='flex flex-wrap m-auto'>
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='max-w-xs m-auto mb-16 p-16 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-4'>Green</h4>
        <div class='bg-green text-white text-center rounded py-8 mb-4'>Base</div>
        <div class='bg-green-light text-white text-center rounded py-8 mb-4'>Light</div>
        <div class='bg-green-dark text-white text-center rounded py-8 mb-4'>Dark</div>
        <div class='bg-green-darker text-white text-center rounded py-8'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='max-w-xs m-auto mb-16 p-16 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-4'>Yellow</h4>
        <div class='bg-yellow text-black text-center rounded py-8 mb-4'>Base</div>
        <div class='bg-yellow-light text-black text-center rounded py-8 mb-4'>Light</div>
        <div class='bg-yellow-dark text-black text-center rounded py-8 mb-4'>Dark</div>
        <div class='bg-yellow-darker text-black text-center rounded py-8'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='max-w-xs m-auto mb-16 p-16 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-4'>Blue</h4>
        <div class='bg-blue text-white text-center rounded py-8 mb-4'>Base</div>
        <div class='bg-blue-light text-white text-center rounded py-8 mb-4'>Light</div>
        <div class='bg-blue-dark text-white text-center rounded py-8 mb-4'>Dark</div>
        <div class='bg-blue-darker text-white text-center rounded py-8'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='max-w-xs m-auto mb-4 p-16 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-4'>Greyscale</h4>
        <div class='bg-black text-white text-center rounded py-8 mb-4'>Black</div>
        <div class='bg-grey text-white text-center rounded py-8 mb-4'>Grey</div>
        <div class='bg-grey-85 text-white text-center rounded py-8 mb-4'>85%</div>
        <div class='bg-grey-70 text-white text-center rounded py-8 mb-4'>70%</div>
        <div class='bg-grey-55 text-white text-center rounded py-8 mb-4'>55%</div>
        <div class='bg-grey-40 text-black text-center rounded py-8 mb-4'>40%</div>
        <div class='bg-grey-25 text-black text-center rounded py-8 mb-4'>25%</div>
        <div class='bg-grey-15 text-black text-center rounded py-8 mb-4'>15%</div>
        <div class='bg-white text-black text-center rounded py-8 border border-grey-25'>White</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='max-w-xs m-auto mb-16 p-16 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-4'>Success</h4>
        <div class='bg-success text-white text-center rounded py-8 mb-4'>Base</div>
        <div class='bg-success-light text-white text-center rounded py-8 mb-4'>Light</div>
        <div class='bg-success-dark text-white text-center rounded py-8 mb-4'>Dark</div>
        <div class='bg-success-darker text-white text-center rounded py-8'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='max-w-xs m-auto mb-16 p-16 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-4'>Error</h4>
        <div class='bg-error text-white text-center rounded py-8 mb-4'>Base</div>
        <div class='bg-error-light text-white text-center rounded py-8 mb-4'>Light</div>
        <div class='bg-error-dark text-white text-center rounded py-8 mb-4'>Dark</div>
        <div class='bg-error-darker text-white text-center rounded py-8'>Darker</div>
      </div>
    </div>
  </div>
`

export const Typography = () => `
  <div class='container m-auto'>
    <p class='text-grey-55 text-xs'>Heading 1</p>
    <h1 class='mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h1>
    
    <p class='text-grey-55 text-xs'>Heading 2</p>
    <h2 class='mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h2>
    
    <p class='text-grey-55 text-xs'>Heading 3</p>
    <h3 class='mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h3>
    
    <p class='text-grey-55 text-xs'>Heading 4</p>
    <h4 class='mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h4>
    
    <p class='text-grey-55 text-xs'>Heading 5</p>
    <h5 class='mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h5>
    
    <p class='text-grey-55 text-xs'>Heading 6</p>
    <h6 class='mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</h6>
    
    <p class='text-grey-55 text-xs'>Body large</p>
    <div class='text-lg mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
    
    <p class='text-grey-55 text-xs'>Body base</p>
    <div class='text-base mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
    
    <p class='text-grey-55 text-xs'>Body small</p>
    <div class='text-sm mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
    
    <p class='text-grey-55 text-xs'>Body extra small</p>
    <div class='text-xs mb-16'>Where you put your money matters.<br>A bank that finances a sustainable tomorrow.</div>
  </div>
`

export const Spacing = () => `
<div class='container'>
  <h2 class="mb-8">Sizes</h2>
  <div class="rounded bg-grey-15 mb-16 p-8">
    <p>
        Sizing is based on an 8px system. Width and height classes are defined as <code>.w-{n}</code> and <code>.h-{n}</code> respectively,
        where <code>n</code> corresponds to the pixel value from the system.
        Valid values include: 2, 4, 8, 12, 16, 24, 32, 48, 64, 96 and 160.
    </p>
    <p class="mt-16">Usage example</p>
    <code class="pl-16">
        &lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">w-16 h-24</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;
    </code>
  </div>
  <div class="flex flex-wrap w-full justify-between items-end mb-64">
    <span class="block w-2 h-2 bg-grey"></span>
    <span class="block w-4 h-4 bg-grey"></span>
    <span class="block w-8 h-8 bg-grey"></span>
    <span class="block w-12 h-12 bg-grey"></span>
    <span class="block w-16 h-16 bg-grey"></span>
    <span class="block w-24 h-24 bg-grey"></span>
    <span class="block w-32 h-32 bg-grey"></span>
    <span class="block w-48 h-48 bg-grey"></span>
    <span class="block w-64 h-64 bg-grey"></span>
    <span class="block w-96 h-96 bg-grey"></span>
    <span class="block w-160 h-160 bg-grey"></span>
  </div>
  
  <h2 class="mb-8">Padding</h2>
  <div class="rounded bg-grey-15 mb-16 p-8">
    <p>
        Padding is defined as <code>.p-{n}</code> for symmetrical padding, or <code>.p{side}-{n}</code>
        where <code>side</code> corresponds to l, r, t or b for the corresponding side.
        Valid values include: 2, 4, 8, 12, 16, 24, 32, 48, 64, 96 and 160.
    </p>
    <p class="mt-16">Usage example</p>
    <code>
        <span class="pl-16">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">p-16</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
        <span class="pl-16">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">pt-16 pr-24</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span>
    </code>
  </div>
  <div class="flex flex-wrap w-full justify-between items-end mb-64">
    <span class="border p-2">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-4">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-8">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-12">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-16">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-32">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-48">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-64">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
    <span class="border p-96">
      <span class="block w-16 h-16 bg-grey"></span>
    </span>
  </div>
  
  <h2 class="mb-8">Margins</h2>
  <div class="rounded bg-grey-15 mb-16 p-8">
    <p>
        Margin is defined as <code>.m-{n}</code> for symmetrical margins, or <code>.m{side}-{n}</code>
        where <code>side</code> corresponds to l, r, t or b for the corresponding side.
        Valid values include: 2, 4, 8, 12, 16, 24, 32, 48, 64, 96 and 160.
    </p>
    <p class="mt-16">Usage example</p>
    <code>
        <span class="pl-16">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">m-16</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
        <span class="pl-16">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">mt-16 mr-24</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span>
    </code>
  </div>
  <div class="w-full">
    <p class="mb-2 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-4 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-8 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-12 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-16 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-32 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-48 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-64 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-96 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="mb-160 bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="bg-grey-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</div>
`

export const Grid = () => `
<div class="container">
  <h2 class="mb-16">Bootstrap 3 style grid</h2>
    <div class="rounded bg-grey-15 mb-16 p-8">
      <p>This is a 12-column system based on flexbox, and can be used in a similar fashion to bootstrap 3 by using <code>.col-{n}</code> and substituting n with a number between 1 and 12.</p>
      <p class="mt-16">Usage example</p>
      <code>
        <span class="pl-16">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">row</span>"&gt;<br></span>
          <span class="pl-32">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">col-6</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
          <span class="pl-32">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">col-6</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
        <span class="pl-16">&lt;/<span class="text-error">div</span>&gt;</span>
      </code>
    </div>
  <div class="row">
    <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-4">.col-4</div>
    <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-4">.col-4</div>
    <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-4">.col-4</div>
  </div>
  <div class="row">
    <div class="col-2 border border-dashed border-grey-25 bg-grey-15 p-4">.col-2</div>
    <div class="col-8 border border-dashed border-grey-25 bg-grey-15 p-4">.col-8</div>
    <div class="col-2 border border-dashed border-grey-25 bg-grey-15 p-4">.col-2</div>
  </div>
  <div class="row">
    <div class="col-3 border border-dashed border-grey-25 bg-grey-15 p-4">.col-3</div>
    <div class="col-4 border border-dashed border-grey-25 bg-grey-15 p-4">.col-4</div>
    <div class="col-5 border border-dashed border-grey-25 bg-grey-15 p-4">.col-5</div>
  </div>
  <div class="row mb-16">
    <div class="col border border-dashed border-grey-25 bg-grey-15 p-4">.col</div>
    <div class="col border border-dashed border-grey-25 bg-grey-15 p-4">.col</div>
    <div class="col border border-dashed border-grey-25 bg-grey-15 p-4">.col</div>
    <div class="col border border-dashed border-grey-25 bg-grey-15 p-4">.col</div>
    <div class="col border border-dashed border-grey-25 bg-grey-15 p-4">.col</div>
  </div>
    
  <h2 class="mb-16">Responsive columns</h2>
  <div class="rounded bg-grey-15 mb-16 p-8">
    <p>Breakpoints</p>
    <code>
      <ul class="pl-16">
        <li><strong>xs</strong>: >480px</li>
        <li><strong>sm</strong>: >768px</li>
        <li><strong>md</strong>: >992px</li>
        <li><strong>lg</strong>: >1200px</li>
      </ul>
    </code>
    <br>
    <p>Breakpoints are selected by prefixing the breakpoint to the column class <code>{breakpoint}:col-{n}</code></p>
    <p class="mt-16">Usage example</p>
    <code class="pl-16">
        &lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">xs:col-6 md:col-4 lg:col-3</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;
    </code>
    <p class="mt-16">Keep in mind that responsive classes are defined to <strong>defeat</strong> non-responsive classes.</p>
  </div>

  <div class="row">
    <div class="md:col-4 sm:col-8 border border-dashed border-grey-25 bg-grey-15 p-4">.md:col-4 .sm:col-8</div>
    <div class="md:col-8 sm:col-4 border border-dashed border-grey-25 bg-grey-15 p-4"> .md:col-8  .sm:col-4</div>
  </div>
  <div class="row">
    <div class="md:col-6 sm:col-3 border border-dashed border-grey-25 bg-grey-15 p-4">.md:col-6 .sm:col-3</div>
    <div class="md:col-6 sm:col-9 border border-dashed border-grey-25 bg-grey-15 p-4"> .md:col-6  .sm:col-9</div>
  </div>

</div>
`
