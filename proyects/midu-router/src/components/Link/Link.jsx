import { EVENTS } from "../../const/events"


const navigate = (url) => {
    window.history.pushState({}, '', url)
    const navigationEvent = new Event (EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }
export default function Link({target, to, children, ...props}) {

    const handleClick = (e) => {

        const isMainEvent = e.button === 0 
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
        const isManageableEvent = target === undefined || target === null || target === '_self'

        if (isMainEvent && !isModifiedEvent && isManageableEvent) {
            e.preventDefault()
            navigate(to)
        }
     
    }

    return (
        <a onClick={handleClick} href="#">{children}</a>
    )

}