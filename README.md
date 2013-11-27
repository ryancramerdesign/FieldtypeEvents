# FieldtypeEvents

This modules serves as an example of creating an editable table of 
data as a Fieldtype and Inputfield in ProcessWire. In this case, we
create a simple table of events each with date, location and notes.
This pattern can be adapted to nearly any table of information. 

Note that this module is intended as a proof-of-concept. If you 
find it useful for the example scenario (events) then great, but 
keep in mind it is not intended as a comprehensive events solution,
where using ProcessWire pages may be a better fit. 

<img src='https://github.com/ryancramerdesign/FieldtypeEvents/raw/master/screenshot.png' />


## Install

1. Copy the files for this module to /site/modules/FieldtypeEvents/ 
2. In admin: Modules > Check for new modules. Install Fieldtype > Events.
3. Create a new field of type Events, and name it whatever you would 
   like. In our examples we named it simply "events". 
4. Add the field to a template and edit a page using that template. 

## Output 

A typical output case for this module would work like this:

``````
foreach($page->events as $event) {
  echo "
    <p>
    Date: $event->date<br />
    Location: $event->location<br />
    Notes: $event->notes
    </p>
    ";
}
``````

This module provides a default rendering capability as well, so that
you can also do this (below) and get about the same result as above:

``````
echo $page->events; 
``````

...or this: 

``````
foreach($page->events as $event) {
  echo $event; 
}
``````

## Finding events

This fieldtype includes an indexed date field so that you can locate
events by date or within a date range. 

`````
// find all pages that have expired events
$results = $pages->find("events.date<" . time()); 

// find all pages with events in January, 2014
$results = $pages->find("events.date>=2014-01-01, events.date<2014-02-01"); 
`````


