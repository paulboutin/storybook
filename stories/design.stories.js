export default {
  title: 'Design System'
}

export const Colors = () => `
<div class="container">
  <div class="row row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
  
    <div class="col p-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Green</h5>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-green-light)">
              green-lighten-5
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-green)">
              base-green
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-green-dark)">
              green-darken-10
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-green-darker)">
              green-darken-20
          </div>
        </div>    
      </div>
    </div>
    
    <div class="col p-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Yellow</h5>
          <div class="rounded mb-1 p-1" style="background: var(--color-yellow-light)">
              yellow-lighten-10
          </div>
          <div class="rounded mb-1 p-1" style="background: var(--color-yellow)">
              base-yellow
          </div>
          <div class="rounded mb-1 p-1" style="background: var(--color-yellow-dark)">
              yellow-darken-10
          </div>
          <div class="rounded mb-1 p-1" style="background: var(--color-yellow-darker)">
              yellow-darken-20
          </div>
        </div>    
      </div>
    </div>
    
    <div class="col p-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Blue</h5>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-blue-light)">
              blue-lighten-10
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-blue)">
              base-blue
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-blue-dark)">
              blue-darken-5
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-blue-darker)">
              blue-darken-15
          </div>
        </div>
      </div>
    </div>
  
    <div class="col p-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Greyscale</h5>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-black)">
              black
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-darkgrey)">
              darkgrey
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-darkgrey-85)">
              darkgrey-85
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-darkgrey-70)">
              darkgrey-70
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-darkgrey-55)">
              darkgrey-55
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-darkgrey-40)">
              darkgrey-40
          </div>
          <div class="rounded mb-1 p-1" style="background: var(--color-darkgrey-25)">
              darkgrey-25
          </div>
          <div class="rounded mb-1 p-1" style="background: var(--color-darkgrey-15)">
              darkgrey-15
          </div>
          <div class="rounded mb-1 p-1 border" style="background: var(--color-white)">
              white
          </div>
        </div>
      </div>    
    </div>
  
    <div class="col p-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Success</h5>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-success-light)">
              success-lighten-5
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-success)">
              base-success
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-success-dark)">
              success-darken-5
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-success-darker)">
              success-darken-10
          </div>
        </div>
      </div>    
    </div>
  
    <div class="col p-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Error</h5>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-error-light)">
              error-lighten-10
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-error)">
              base-error
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-error-dark)">
              error-darken-10
          </div>
          <div class="rounded mb-1 p-1 text-white" style="background: var(--color-error-darker)">
              error-darken-20
          </div>
        </div>
      </div>    
    </div>
    
  </div>
</div>
`

export const Typography = () => '<h1>Hello World</h1>'
