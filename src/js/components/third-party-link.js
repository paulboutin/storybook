const Modal = actionFn => {
  const modal = new DOMParser().parseFromString(
    `
<article class="modal-wrapper">
  <div class="modal-overlay">
    <div class="modal-body col-12 col-sm-8">
      <div class="modal-header">
        <p class="text-h4 font-display">You are leaving Bank of the West</p>
        <i class="icon icon-close text-lg modal-cancel"></i>
      </div>
      <div class="modal-content">
        <p class="text-sm">
          Please be aware: The website you are about to enter is not operated by
          Bank of the West. Bank of the West does not endorse the content of
          this website and makes no warranty as to the accuracy of the content
          or functionality of this website. The privacy and security policies of
          the site may differ from those practiced by Bank of the West.
        </p>
        <p class="text-sm">
          To proceed to this website, select Continue, or Cancel to remain on
          the Bank of the West website.
        </p>
        <div class="third-party-controls">
          <div class="action-wrapper">
            <label class="checkbox-wrapper show-popup-control">
              <input type="checkbox" />
              <span class="checkbox"><i class="icon icon-check-solid"></i></span>
              <span class="checkbox-label">Don&#x27;t show again</span>
            </label>
          </div>
          <div class="action-wrapper">
            <button type="button" class="button button-tertiary modal-cancel">
              <span>Cancel</span>
            </button>
            <button type="button" class="button button-primary modal-action">
              <span>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
`,
    'text/html'
  ).body.firstChild

  const action = modal.querySelector('.modal-action')
  const cancels = modal.querySelectorAll('.modal-cancel')

  cancels.forEach(cancel =>
    cancel.addEventListener('click', () => {
      modal.remove()
      document.body.classList.remove('modal-active')
    })
  )

  action.addEventListener('click', actionFn)

  return modal
}

export default ({ hosts = [] } = {}) => {
  // to include additional hosts, pass array to function invocation
  hosts = [...hosts, window.location.host]

  const links = document.querySelectorAll('.link')

  links.forEach(link => {
    const url = new URL(link.href)

    if (!hosts.includes(url.host)) {
      link.addEventListener('click', e => {
        e.preventDefault()

        const modal = Modal(() => {
          window.location.assign(url.toString())
        })

        document.body.classList.add('modal-active')
        document.body.append(modal)
      })
    }
  })
}
