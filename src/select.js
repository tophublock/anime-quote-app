// https://codepen.io/wallaceerick/pen/ctsCz; http://jsfiddle.net/BB3JK/47/

export default function styleSelect($select) {
    const $options = $select.children('option');

    // Hide original select element, wrap in div
    $select.addClass('select-hidden');
    $select.wrap('<div class="select"></div>');
    // const $styledSelect = $('<div class="select-styled"></div>');
    // $select.after($styledSelect);
    $select.after('<div class="select-styled"></div>');

    // Create new styled select element
    const $styledSelect = $select.next('div.select-styled');
    $styledSelect.text($options.eq(0).text());

    // Make drop-down list
    const $list = $('<ul />', { class: 'select-options' });
    $list.insertAfter($styledSelect);

    // Add options to list
    for (let i = 0; i < $options.length; i++) {
        $('<li />', {
            text: $options.eq(i).text(),
            rel: $options.eq(i).val(),
        }).appendTo($list);
    }

    const $listItems = $list.children('li');

    // Show list when styled div is clicked, or toggle hide
    $styledSelect.bind('click', (e) => {
        e.stopPropagation();
        const $this = $(e.currentTarget);
        $('div.select-styled.active').each((idx, el) => {
            $(el).removeClass('active').next('ul.select-options').hide();
        });
        $this.toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click((e) => {
        e.stopPropagation();
        const $this = $(e.currentTarget);
        $styledSelect.text($this.text()).removeClass('active');
        $select.val($this.attr('rel'));
        $list.hide();
    });

    $(document).click(() => {
        $styledSelect.removeClass('active');
        $list.hide();
    });
}
