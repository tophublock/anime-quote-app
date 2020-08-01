export default function styleInputNumber($input) {
    $input.wrap('<div class="input-number"></div>');

    // Add plus button on right side
    const $plusBtn = $('<button class="input-number-plus-btn"></button>');
    $input.after($plusBtn);
    $plusBtn.click(() => {
        const num = parseInt($input.val(), 10);
        $input.val(num + 1);
    });

    // Add minus button on left side
    const $minusBtn = $('<button class="input-number-minus-btn"></button>');
    $input.before($minusBtn);
    $minusBtn.click(() => {
        const num = parseInt($input.val(), 10);
        if (num > 1) {
            $input.val(num - 1);
        }
    });
}
