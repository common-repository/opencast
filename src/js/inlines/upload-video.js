!function(r){var a={};function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=r,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({7:function(e,t){function w(e,t,r,a,n,i){e.val(""),e.removeClass("disabled has-error"),e.trigger("blur"),e.prop("disabled",!1),t.val(""),t.removeClass("disabled has-error"),t.trigger("blur"),t.prop("disabled",!1),r.prop("disabled",!1),r.removeClass("disabled"),a.removeClass("disabled"),$(".dz-hidden-input").prop("disabled",!1),r.parent().find("div.oc-message").css("color",i).text(n).show(),r.parent().find("div.oc-progress").hide(),r.parent().find("div.oc-progress > span.loader-progress").text("0")}window.$j=window.jquery=window.$=jQuery.noConflict(),Dropzone.autoDiscover=!1,window.OcUploadConnected=!1,$(function(){$("div.oc-upload-box > form#ingestForm").each(function(){var e=$(this).attr("action"),t=$(this).find("div.dropzone"),r=$(t).data("config"),a=$(t).attr("id"),x=new Dropzone("#".concat(a),{url:e,maxFiles:1,maxFilesize:r.maxFilesize,dictDefaultMessage:r.dictDefaultMessage,acceptedFiles:r.acceptedFiles,addRemoveLinks:!0,timeout:12e5,autoProcessQueue:!1});x.on("addedfile",function(e){t.removeClass("has-error")}),$(this).find('input[type="submit"]').on("click",function(e){if(e.preventDefault(),e.stopPropagation(),!OcUploadConnected){var t=$(this).parent().siblings('form[name="OCLtiLaunchForm"]');return r=t,a=$(this),r&&(r.on("submit",function(e){e.preventDefault();var t=decodeURIComponent($(this).attr("action"));$.ajax({url:t,crossDomain:!0,type:"post",xhrFields:{withCredentials:!0},data:$(r).serialize(),complete:function(){OcUploadConnected=!0,a.trigger("click")}})}),r.trigger("submit")),!1}var r,a,n=$(this).data("success"),i=$(this).data("fail"),s=$(this).parent().attr("action"),u=$(this).parent().find('input[name="title"]');u.removeClass("has-error disabled");var o=u.val(),f=$(this).parent().find('input[name="creator"]');f.removeClass("has-error disabled");var d,m,l=f.val(),h=$(this).parent().find('input[name="flavor"]').val(),c=$(this).parent().find('input[name="isPartOf"]').val(),v=$(this).parent().find('input[name="workflowId"]').val(),p=$(this).parent().find('input[name="acl"]').val(),g={title:o,creator:l,isPartOf:c,oc_acl:decodeURIComponent(p).replace(/\+/g," ")},b=$(this).parent().find("div.dropzone");b.removeClass("has-error"),0<x.getQueuedFiles().length&&o.trim()&&l.trim()&&OcUploadConnected?(d=x.getQueuedFiles(),u.addClass("disabled"),u.prop("disabled",!0),f.addClass("disabled"),f.prop("disabled",!0),$(this).prop("disabled",!0),$(this).addClass("disabled"),b.addClass("disabled"),$(".dz-hidden-input").prop("disabled",!0),m=$(this),$(this).parent().find("div.oc-message").hide(),$(this).parent().find("div.oc-progress").show(),d.forEach(function(a){var d,l,c,p,o;l=a,c=g,p=h,o=v,function(e){return $.ajax({url:e+"/createMediaPackage",xhrFields:{withCredentials:!0}})}(d=s).then(function(e,t,r){return a=d,n=r.responseText,i=function(e){function t(e){return(new XMLSerializer).serializeToString(new Text(e))}return'<?xml version="1.0" encoding="UTF-8"?><dublincore xmlns="http://www.opencastproject.org/xsd/1.0/dublincore/"            xmlns:dcterms="http://purl.org/dc/terms/"            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dcterms:creator>'+t(e.creator)+"</dcterms:creator><dcterms:title>"+t(e.title)+"</dcterms:title><dcterms:isPartOf>"+t(e.isPartOf)+"</dcterms:isPartOf></dublincore>"}(c),$.ajax({url:a+"/addDCCatalog",method:"POST",data:{mediaPackage:n,dublinCore:i,flavor:"dublincore/episode"},xhrFields:{withCredentials:!0}});var a,n,i}).then(function(e,t,r){var a,n,i,o,s=c.oc_acl;return a=d,n=r.responseText,i=s,(o=new FormData).append("mediaPackage",n),o.append("flavor","security/xacml+episode"),o.append("BODY",new Blob([i]),"acl.xml"),$.ajax({url:a+"/addAttachment",method:"POST",data:o,processData:!1,contentType:!1,xhrFields:{withCredentials:!0}})}).then(function(e,t,r){return a=d,n=r.responseText,i=l,o=p,(s=new FormData).append("mediaPackage",n),s.append("flavor",o),s.append("tags",""),s.append("BODY",i,i.name),$.ajax({xhr:function(){var e=new window.XMLHttpRequest;return e.upload.addEventListener("progress",function(e){var t;e.lengthComputable&&(t=parseInt(e.loaded/e.total*100),$("div.oc-progress > span.loader-progress").text(t))},!1),e},url:a+"/addTrack",method:"POST",data:s,processData:!1,contentType:!1,xhrFields:{withCredentials:!0},timeout:0});var a,n,i,o,s}).then(function(e,t,r){return a=d,n=r.responseText,i=o,$.ajax({url:a+"/ingest/"+i,method:"POST",data:{mediaPackage:n},xhrFields:{withCredentials:!0}});var a,n,i}).done(function(e,t,r){x.removeFile(a),w(u,f,m,b,n,"green")}).fail(function(e,t,r){x.removeFile(a),w(u,f,m,b,i,"red")})})):(o.trim()||$(u).addClass("has-error"),l.trim()||$(f).addClass("has-error"),0==x.getQueuedFiles().length&&$(b).addClass("has-error"),x.uploadFiles([]))}),$(this).find('input[type="text"]').keyup(function(){$(this).val().trim()&&$(this).removeClass("has-error")})})})}});