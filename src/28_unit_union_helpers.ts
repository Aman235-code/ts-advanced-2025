
// Exclude<U, V> -> remove from U those members assignable to V
// Extract<U, V> -> keep from U those members assignable to V
// Non Nullable 

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup"
type EventType2 = Exclude<EventType1, "keydown">

function handleEvent(e: EventType2){
    console.log(e)
}

handleEvent('click')
// handleEvent('keydown') // error 

type ActionsN1 = "create" | "update" | "delete" | "read"
type ActionsN2 = Extract<ActionsN1, "create" | "update" | "delete">

function handleEvent2(e: ActionsN2){
    console.log(e)
}

// handleEvent2('read') // error 

type MaybeNumber = number | null | undefined
type CleanNumber = NonNullable<MaybeNumber> // only number (not nul or undefined)

function square(num: CleanNumber){
    return num * 2
}

square(10)
// square(null) // error