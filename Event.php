<?php namespace ProcessWire;

/**
 * FieldtypeEvents: Event
 * 
 * An individual event item to be part of an EventArray for a Page
 * 
 * @property string $date Date string in Y-m-d format
 * @property string $title Title of the event
 * @property bool $formatted
 * 
 */
class Event extends WireData {

	/**
	 * Construct a new Event
	 *
	 */
	public function __construct() {
		// define the fields that represent our event (and their default/blank values)
		$this->set('date', ''); 
		$this->set('title', ''); 
		$this->set('formatted', false);
		parent::__construct();
	}

	/**
	 * Set a value to the event: date, location or notes
	 * 
	 * @param string $key
	 * @param string $value
	 * @return WireData|self
	 *
	 */
	public function set($key, $value) {
		if($key === 'date') {
			$value = $value ? wireDate('Y-m-d', $value) : '';
		} else if($key === 'title') {
			$value = $this->sanitizer->text($value); 
		}
		return parent::set($key, $value); 
	}

	/**
	 * Return a string representing this event
	 * 
	 * @return string
	 *
	 */
	public function __toString() {
		return "$this->date: $this->title";	
	}
}

