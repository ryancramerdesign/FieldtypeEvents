<?php namespace ProcessWire;

/**
 * FieldtypeEvents: EventArray
 * 
 * Contains multiple Event objects for a page
 *
 */

class EventArray extends WireArray {

	/**
	 * Is given item valid to store in this EventArray?
	 * 
	 * @param Event $item
	 * @return bool
	 * 
	 */
	public function isValidItem($item) {
		return $item instanceof Event;
	}

	/**
	 * Make a string value to represent these events that can be used for comparison purposes
	 * 
	 * @return string
	 * 
	 */
	public function __toString() {
		$a = [];
		foreach($this as $item) $a[] = (string) $item;
		return implode("\n", $a);
	}
}

