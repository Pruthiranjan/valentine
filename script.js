$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $('head').append(`<style  id='myStyle'>.envelope:before {
        background-color: #f08080;
        content: "";
        position: absolute;
        width: 212px;
        height: 212px;
        transform: rotate(45deg);
        top: -105px;
        left: 44px;
        border-radius: 30px 0 0 0;
        z-index:0;
      }</style>`);
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
      setTimeout(() => {
        $('#myStyle').remove();
      }, 900);
    });
});
