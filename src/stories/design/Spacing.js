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
    <div class="flex flex-wrap w-full justify-between items-end mb-2xl">
      <span class="block w-3xs h-3xs bg-green mb-sm"></span>
      <span class="block w-2xs h-2xs bg-green mb-sm"></span>
      <span class="block w-xs h-xs bg-green mb-sm"></span>
      <span class="block w-sm h-sm bg-green mb-sm"></span>
      <span class="block w-base h-base bg-green mb-sm"></span>
      <span class="block w-lg h-lg bg-green mb-sm"></span>
      <span class="block w-xl h-xl bg-green mb-sm"></span>
      <span class="block w-2xl h-2xl bg-green mb-sm"></span>
      <span class="block w-3xl h-3xl bg-green mb-sm"></span>
      <span class="block w-4xl h-4xl bg-green mb-sm"></span>
      <span class="block w-5xl h-5xl bg-green mb-sm"></span>
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
        <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">pt-base pr-lg</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span>
      </code>
    </div>
    <div class="flex flex-wrap w-full justify-between items-end mb-2xl">
      <div class="bg-green p-3xs mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-2xs mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-xs mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-sm mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-base mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-lg mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-xl mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-2xl mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
      <div class="bg-green p-3xl mb-sm">
        <span class="block w-base h-base bg-green-darker"></span>
      </div>
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
        <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">m-base</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span><br>
        <span class="pl-base">&lt;<span class="text-error">div</span> class="<span class="text-yellow-darker">mt-base mr-lg</span>"&gt;...&lt;/<span class="text-error">div</span>&gt;</span>
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
