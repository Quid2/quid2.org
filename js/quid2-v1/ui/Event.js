goog.provide("quid2.ui.Event");
goog.require("quid2");

/* NOTE: Event names that match built-in names (e.g. "focus.quid2") won't work. */
quid2.ui.Event = {
    /** Request to delete a component.
     * @param tab
     * */
    DELETE: 'delete.quid2'

    /** An object has been selected.
     * @param hObj
     * . */
    ,FOCUS: 'focused.quid2'

    /** An element is made visible. */
    ,VISIBLE: 'showElement.quid2'

    /** Status change.
     * @param statusKind :: "info" | "working" | "warning" | "error"
     * @param msg text
     * . */
    ,STATUS: 'status.quid2'
};
