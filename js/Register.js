Bootsnipp
About
Tools 
Snippets 
Register
Login

"Mix & Match Register"
Bootstrap 3.1.0 Snippet by ninjamonk
3.1.0 jQuery login registration forms
 
 PreviewHTMLCSSJS    Fork this  83.9K   207 Fav  


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
$(function () {
    $('.button-checkbox').each(function () {
        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };
        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });
        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');
Similar snippets: See More
359  0 
Mix & Match Login


444  0 
Mix & Match Login


75  0 
Mix & Match Login


32  0 
Mix & Match Login


 
Comments:

 Follow @bootsnipp  Tweet
Bootsnipp.com © 2015 Dan's Tools | Site Privacy policy | Featured snippets are MIT license.