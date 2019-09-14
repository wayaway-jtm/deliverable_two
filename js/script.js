var eventType = "";
var tempFahr = -99;

var eventClothing = "";
var tempClothing = ""; // temp = temperature NOT temporary


var eventTypePrompt = "What type of event are you attending?";
var eventTypeAlert = "";

while (eventType === "")
{
    eventType = prompt(eventTypePrompt);
    eventType = eventType.toLowerCase();
    switch(eventType)
    {
        case "casual":
            eventClothing = "something comfy";
            break;
        case "semi-formal":
            eventClothing = "a polo";
            break;
        case "formal":
            eventClothing = "a suit";
            break;
        default:
            eventTypeAlert = "Sorry, " + eventType + " is not a valid event type. Valid types include casual, semi-formal, and formal."
            alert(eventTypeAlert);
            eventType = "";
            break;
    }
}

var tempPrompt = "What is the expected temperature?";

while (tempFahr === -99)
{
    tempFahr = prompt(tempPrompt);
    if (tempFahr < 54)
    {
        tempClothing = "a coat";
    }
    else if (tempFahr > 53 && tempFahr < 71)
    {
        tempClothing = "a jacket";
    }
    else if (tempFahr > 70)
    {
        tempClothing = "no jacket";
    }
}

var result = "Since it will be " + tempFahr + " degrees and you are going to a " +
            eventType + " event, you should wear " + eventClothing + " and " +
            tempClothing + ".";

console.log(result);