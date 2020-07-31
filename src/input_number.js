export default function styleInputNumber($input) {
    // Add left and right buttons
    $input.wrap('<div class="input-number></div>');

    return $input;
}