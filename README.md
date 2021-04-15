# FieldtypeEvents (and InputfieldEvents)

This modules serves as an example of creating an editable table of 
data as a Fieldtype and Inputfield in ProcessWire. In this case, we
create a simple table of events each with date and title. This pattern 
can be adapted to nearly any table of information. 

Note that this module is intended as a proof-of-concept. If you 
find it useful for the example scenario (events) then great, but 
keep in mind it is not intended as a comprehensive events solution,
where using ProcessWire pages may be a better fit. If you use this 
Fieldtype then chances are you'll want to use it as a starting point
for further development rather than as a final solution.

## Upgrade

If you are using a previous version of this module, please note that 
this one is different and simplified from the previous version. As a 
result, if you are actually using the module for real (rather than an
example or demo) then you shouldn't upgrade.

## Install

1. Copy the files for this module to /site/modules/FieldtypeEvents/ 
2. In admin: Modules > Refresh. Install Fieldtype > Events.
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
      Title: $event->title
    </p>
    ";
}
``````

## Finding events

This fieldtype includes an indexed `date` field and fulltext indexed 
`title` field so that you can locate events by date or text. 

`````
// find all pages that have events after May 1, 2021
$results = $pages->find('events.date>2021-05-01');

// find all pages that have expired events
$results = $pages->find('events.date<today');

// find all pages with events in January, 2022
$results = $pages->find("events.date>=2022-01-01, events.date<2022-02-01"); 

// find all pages with events that have the word “convention” in the title
$results = $pages->find("events.title~=convention"); 
`````


