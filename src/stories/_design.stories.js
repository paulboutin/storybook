export default {
  title: 'Design System'
}

export const Download = () => `
  <a href='/styles.zip' class='link'>Download styles</a>
`

export const Colors = () => `
  <div class='flex flex-wrap m-auto'>
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='w-64 m-auto mb-4 p-5 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2'>Green</h4>
        <div class='bg-green text-white text-center rounded py-1 mb-1'>Base</div>
        <div class='bg-green-light text-white text-center rounded py-1 mb-1'>Light</div>
        <div class='bg-green-dark text-white text-center rounded py-1 mb-1'>Dark</div>
        <div class='bg-green-darker text-white text-center rounded py-1'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='w-64 m-auto mb-4 p-5 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2'>Yellow</h4>
        <div class='bg-yellow text-black text-center rounded py-1 mb-1'>Base</div>
        <div class='bg-yellow-light text-black text-center rounded py-1 mb-1'>Light</div>
        <div class='bg-yellow-dark text-black text-center rounded py-1 mb-1'>Dark</div>
        <div class='bg-yellow-darker text-black text-center rounded py-1'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='w-64 m-auto mb-4 p-5 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2'>Blue</h4>
        <div class='bg-blue text-white text-center rounded py-1 mb-1'>Base</div>
        <div class='bg-blue-light text-white text-center rounded py-1 mb-1'>Light</div>
        <div class='bg-blue-dark text-white text-center rounded py-1 mb-1'>Dark</div>
        <div class='bg-blue-darker text-white text-center rounded py-1'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='w-64 m-auto mb-4 p-5 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2'>Greyscale</h4>
        <div class='bg-black text-white text-center rounded py-1 mb-1'>Black</div>
        <div class='bg-grey text-white text-center rounded py-1 mb-1'>Grey</div>
        <div class='bg-grey-85 text-white text-center rounded py-1 mb-1'>85%</div>
        <div class='bg-grey-70 text-white text-center rounded py-1 mb-1'>70%</div>
        <div class='bg-grey-55 text-white text-center rounded py-1 mb-1'>55%</div>
        <div class='bg-grey-40 text-black text-center rounded py-1 mb-1'>40%</div>
        <div class='bg-grey-25 text-black text-center rounded py-1 mb-1'>25%</div>
        <div class='bg-grey-15 text-black text-center rounded py-1 mb-1'>15%</div>
        <div class='bg-white text-black text-center rounded py-1 border border-grey-25'>White</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='w-64 m-auto mb-4 p-5 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2'>Success</h4>
        <div class='bg-success text-white text-center rounded py-1 mb-1'>Base</div>
        <div class='bg-success-light text-white text-center rounded py-1 mb-1'>Light</div>
        <div class='bg-success-dark text-white text-center rounded py-1 mb-1'>Dark</div>
        <div class='bg-success-darker text-white text-center rounded py-1'>Darker</div>
      </div>
    </div>
    
    <div class='w-full sm:w-1/2 md:w-1/3'>
      <div class='w-64 m-auto mb-4 p-5 border border-grey-25 rounded'>
        <h4 class='text-grey text-sm font-semibold mb-2'>Error</h4>
        <div class='bg-error text-white text-center rounded py-1 mb-1'>Base</div>
        <div class='bg-error-light text-white text-center rounded py-1 mb-1'>Light</div>
        <div class='bg-error-dark text-white text-center rounded py-1 mb-1'>Dark</div>
        <div class='bg-error-darker text-white text-center rounded py-1'>Darker</div>
      </div>
    </div>
  </div>
`

export const Typography = () => `
<div class='container m-auto'>
  <div>
    <h1>H1 Bank of the West</h1>

    <h2>H2 Bank of the West</h2>

    <h3>H3 Bank of the West</h3>

    <h4>H4 Bank of the West</h4>

    <h5>H5 Bank of the West</h5>

    <h6>H6 Bank of the West</h6>
  </div>
  
  <div class="mt-8">
    <h3 class="text-green">Bank of the West</h3>
    <h3 class="text-blue">Bank of the West</h3>
    <h3 class="text-yellow">Bank of the West</h3>
    <h3 class="text-grey">Bank of the West</h3>
    <h3 class="text-success">Bank of the West</h3>
    <h3 class="text-error">Bank of the West</h3>
  </div>
  
  <p class="mt-8">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, magni, neque. 
    A adipisci animi, autem commodi corporis doloribus expedita explicabo fugit, 
    illo ipsa ipsum libero maiores maxime minus molestias nobis officia qui 
    quibusdam ratione reiciendis rerum soluta totam unde veniam voluptates. 
    Animi blanditiis commodi expedita maiores nostrum quaerat, sapiente tempora.
  </p>  

</div>
`
