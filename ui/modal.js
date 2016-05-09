/**
 * @BlueShark-J
 *
 * 模糊框
 *
 * @author: BlueShark-J
 * Copyright (c) 2016 BlueShark-J, All Rights Reserved
 */

CHESS.registerUI('modal', function(chess) {
    var ret = chess.getUI('eve').setup({});
    var modal_style = ['modal','fade'];
    var $modal = $('<div>')
        .attr({'id':'miderModal',tabindex:"-1",role:"dialog",'aria-labelledby':"myLargeModalLabel"})
        .addClass(modal_style.join(' '))
        .appendTo('body'),
     $modal_doalog = $('<div>')
        .attr({role:"document"})
        .addClass('modal-dialog')
        .appendTo($modal);
     $modal_content = $('<div>')
        .addClass('modal-content')
        .appendTo($modal_doalog),
     $modal_header = $('<div>')
        .addClass('modal-header')
        .append($('<button>').attr({type:"button",'data-dismiss':"modal",'aria-label':"Close"}).addClass('close').html('<span aria-hidden="true">&times;</span>'))
        .appendTo($modal_content),
     $modal_title = $('<h4>')
        .addClass('modal-title')
        .text('Modal title')
        .appendTo($modal_header),
     $modal_body = $('<div>')
        .addClass('modal-body')
        .append('<div>....</div>')
        .appendTo($modal_content),
     $modal_footer = $('<div>')
        .addClass('modal-footer')
        .appendTo($modal_content)
     $modal_close_btn = $('<button>').attr({type:"button",'data-dismiss':"modal"}).addClass('btn btn-default').text('Close').appendTo($modal_footer),
     $modal_Save_btn = $('<button>').attr({type:"button"}).addClass('btn btn-primary').text('确认').appendTo($modal_footer);
    
    function setModalTitle(title){
        $modal_title.html(title);
    }
    function setModalContext($dom,m){
        if(!m)
            $modal_body.empty();
        $modal_body.append($dom)
    }
    ret.$el = $modal;
    ret.setModalTitle = setModalTitle;
    ret.setModalContext = setModalContext;
    ret.setModalSize = function(size){
        $modal.attr('class','');
        $modal.addClass(modal_style.join(' ')+' bs-example-modal-'+size);
        $modal_doalog.attr('class','');
        $modal_doalog.addClass('modal-dialog modal-'+size);
    }
    ret.delegateOnContext = function(dom,event,fn){
        $modal_body.delegate(dom,event,fn);
    }
    ret.undelegateOnContext = function(){
        $modal_body.undelegate();
    }
    $modal.on('hidden.bs.modal', function (e) {
        $modal_body.undelegate();
    })
    ret.bindSavetbtnOnClick = function(fn){
        $modal_Save_btn.off('click');
        $modal_Save_btn.on('click',fn||function(e){});
    }
    return ret;
});