var index = 0;
    change();

    function change() {
        //Collect all images with class 'slides'
        var x = document.getElementsByClassName('slides');

        //Set all the images display to 'none'
        for(var i = 0; i < x.length; i++) { 
            x[i].style.display = "none"; 
        }
        //Increment index variable
        index++;
        //Set index to 1 if it's greater than the amount of images
        if(index > x.length) { 
            index = 1; 
        }

        //set image display to 'block' (visible)
        x[index - 1].style.display = "block";

        //set loop to change image every 2000 milliseconds (2 seconds)
        setTimeout(change, 2000);
    }

    $(document).ready(function() {

        (function(document, window, $, undefined) {
          'use strict';
      
          $('html').addClass('js');
      
          var accordian = ('#accordian');
          var toggleControls = $("<fieldset><legend class='visuallyhidden'>Expand or collapse all FAQ answers</legend><button type='button' class='toggle' id='open' aria-controls='accordian' aria-pressed='false'>Open all &#8615</button><button type='button' class='toggle' id='close' aria-controls='accordian' aria-pressed='false' aria-disabled='true'>Close all &#8613;</button></fieldset>");
          var group = ('.holder');
      
          // Add controls
      
          toggleControls.insertBefore(accordian);
      
          // Set up behaviour / markup for each question and answer
      
          $(group).each(function() {
      
            var $this = $(this);
            var faqheading = $this.find('h2');
            var faqanswer = $this.find('.content');
            var faqID = $this.find('.content').attr('id');
            var button = $("<button type='button' class='trigger' aria-expanded='false' aria-controls='" + faqID + "'>");
      
            // Add button inside heading 
      
            faqheading.wrapInner(button);
      
            // Aria-hidden is to ensure the  icon isn't announced by VO
      
            faqheading.append("<span aria-hidden='true' class='icon'></span></button>");
      
            faqanswer.addClass('hidden');
      
            // Ensure click event is placed on the heading and not the button inside the heading
      
            faqheading.click(function(e) {
      
              e.preventDefault();
              faqanswer.toggleClass('hidden');
      
              var trigger = $this.find('.trigger');
      
              trigger.toggleAttr('aria-expanded', 'true', 'false');
      
              if ($('#close').attr('aria-disabled') === 'true') {
      
                $('#close').removeAttr('aria-disabled', 'true');
              }
      
            }); //click
      
          }); //each group
      
          // Set up behaviour and markup for aria-controls 
      
          $('.toggle').click(function(e) {
      
            e.preventDefault();
      
            var $current = $(this).attr('id');
      
            switch ($current) {
      
              case "open":
      
                $(this).attr('aria-pressed', 'true');
                $('#close').removeAttr('aria-pressed', 'true').removeAttr('aria-disabled', 'true').attr('aria-pressed', 'false');
      
                showAll();
                break;
      
              case "close":
      
                $(this).attr('aria-pressed', 'true');
                $('#open').removeAttr('aria-pressed', 'true').attr('aria-pressed', 'false');
      
                hideAll();
                break;
      
            } //switch
      
          }); //toggle button
      
          // toggle all /  function
      
          function showAll() {
      
            $('.trigger').attr('aria-expanded', 'true');
            $('.content').removeClass('hidden');
      
            /* update live region */
      
            $('#status').html('All FAQ are expanded');
      
            setTimeout(function() {
              $('#status').html('');
            }, 1000); // 1 second 
      
          } //showall
      
          function hideAll() {
      
            $('.trigger').attr('aria-expanded', 'false');
            $('.content').addClass('hidden');
      
            /* update live region */
      
            $('#status').html('All FAQ are collapsed');
      
            setTimeout(function() {
              $('#status').html('');
            }, 1000); // 1 second 
      
          }
      
          // A useful toggle attr function
          // https://gist.github.com/mathiasbynens/298591
      
          $.fn.toggleAttr = function(attr, attr1, attr2) {
            return this.each(function() {
              var self = $(this);
              if (self.attr(attr) == attr1)
                self.attr(attr, attr2);
              else
                self.attr(attr, attr1);
            });
          };
      
        })(document, window, jQuery);
      
      }); //jquery