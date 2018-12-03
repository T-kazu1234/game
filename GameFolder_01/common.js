  //enchantjs�̉�ʃT�C�Y�̐ݒ�

  function resetScreen(){



    //�x�[�X�̕�����ʂ����ς��ɍL����

    $("#base").width(window.innerWidth).height(window.innerHeight);



    //enchantjs-stage�̉�ʃT�C�Y���v�Z

    var width = window.innerWidth;

    var height = window.innerHeight;



    //��]�����𕝂ƍ������r���Ċm�F

    var orientation = "";

    if(width < height){

      //�c

      orientation = "portrait";

      height = width;

    }else{

      //��

      orientation = "landscape";

      width = height;

    }

    

    //div enchant-stage���擾

    var stage = $("#enchant-stage");



    //�X�P�[�����v�Z

    var scale = height / 320.0;



    //div enchant-stage�z����div�i���̔z����canvas���i�[����Ă���j��

    //�X�P�[����ݒ�

    var transformKey = "-" + enchant.ENV.VENDOR_PREFIX + "-transform";

    stage.children("div").css(transformKey,"scale(" + scale + ")");

    

    //enchantjs�̉�ʂ𒆉��Ɋ񂹂�

    var left,top;

    if(orientation == "portrait"){

      top = (window.innerHeight-height)*0.5;

      left = 0;

    }else{

      top = 0;

      left = (window.innerWidth-width)*0.5;

    }

    stage.height(height).width(width);

    stage.css({"position":"absolute","left":left+"px","top":top+"px"});

    

    //�X�N���[���ʒu��0,0�ɐݒ�

    $(window).scrollLeft(0).scrollTop(0);



    //enchant.Core�ւ̔��f���Ƃ��ĘA�z�z���Ԃ�

    return {"scale":scale,"left":left,"top":top};

  }



  //�����ݒ�

  $(function(){

    

    //��]���̏���

    var orientationChange = function(){

      //��ʃT�C�Y�ݒ�

      var result = resetScreen();

      

      //enchant.Core�ւ̕ύX���𔽉f

      var game = enchant.Core.instance;

      if(game !== null){

        game.scale = result["scale"];

        game._pageX = result["left"];

        game._pageY = result["top"];

      }

    };

    

    //��]�C�x���g

    $(window).on("resize",function(event){

      orientationChange();

    });

    $(window).on("orientationchange",function(event){

      orientationChange();

    });

    

    //�]���������h���b�O���邱�Ƃɂ��X�N���[���𖳌��ɂ���

    $("#base").on("touchstart",function(event){event.preventDefault();});



    //���񎞂̃X�N���[���ݒ�

    orientationChange();

  });