!function(a){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,a){a(1),e.exports=a(4)},function(e,t,a){window.$j=window.jquery=window.$=jQuery.noConflict(),a(2),a(3)},function(e,t){function a(e,t){Array.isArray(t)&&t.length&&Swal.fire({title:delete_se_confirm_data.title,text:delete_se_confirm_data.text,icon:"warning",showCancelButton:!0,showCloseButton:!0,confirmButtonColor:"green",cancelButtonColor:"red",confirmButtonText:delete_se_confirm_data.confirm_btn,cancelButtonText:delete_se_confirm_data.cancel_btn,showLoaderOnConfirm:!0,preConfirm:function(){return $.ajax({url:e,method:"POST",async:!0,data:{action:"opencast_delete_se_ajax",se_ids:t}}).fail(function(e){Swal.showValidationMessage("Request failed: ".concat(e.statusText))})},allowOutsideClick:function(){return!Swal.isLoading()}}).then(function(e){var t,a,n,i,c;e.value&&(t=delete_se_confirm_data.result_success_title,a=delete_se_confirm_data.result_success_msg,n="success",i=!0,e.value.success&&e.value.success.notdeleted&&(a=delete_se_confirm_data.result_success_partial_msg,n="warning",c=new Array,e.value.success.notdeleted.forEach(function(e,t){var a,n=$("a[data-id='".concat(e,"']"));n&&(a=n.parent().parent().find("td.title").text(),c.push("Video Title: ".concat(a)))}),c.length&&(a+="<br>"+c.join("<br>"))),e.value.error&&(t=delete_se_confirm_data.result_error_title,i=!1,n="error",a=e.value.error),Swal.fire(t,a,n).then(function(){i&&s()}))})}function s(e){var t,a=0<arguments.length&&void 0!==e?e:"";a?location.href=a:(t=window.location.href.split("?")[0]+"?"+urlParams.toString().replace("?",""),location.href=t)}window.urlParams=new URLSearchParams(window.location.search),$(function(){$(".oc-select2").each(function(){$(this).select2({placeholder:$(this).attr("placeholder"),allowClear:!0,tags:!0,maximumSelectionSize:$(this).data("maxsize"),width:"resolve"})});var e=$(".oc-admin-wrapper ul.nav-tabs li.active"),t=$(".oc-admin-wrapper .tab-pane.active");e.length||t.length||($(".oc-admin-wrapper ul.nav-tabs li").first().addClass("active"),$(".oc-admin-wrapper .tab-pane").first().addClass("active")),$(".oc-admin-wrapper ul.nav-tabs > li").each(function(){var e;urlParams.has("activetab")&&(e=urlParams.get("activetab"),$(".oc-admin-wrapper ul.nav-tabs li.active").removeClass("active"),$(".oc-admin-wrapper .tab-pane.active").removeClass("active"),$("#".concat(e)).addClass("active"),$(this).find('a[href="#'.concat(e,'"]'))&&$(this).addClass("active")),$(this).on("click",function(e){e.preventDefault(),$(".oc-admin-wrapper ul.nav-tabs li.active").removeClass("active"),$(".oc-admin-wrapper .tab-pane.active").removeClass("active"),$(this).addClass("active");var t=$(this).find("a").attr("href");$(t).addClass("active"),$('input[type="hidden"]#activetabpane').val(t.replace("#",""))})}),$("input.trigger-disabled-parent").each(function(){function t(e){var t=$(e).prop("checked"),a=$(e).data("child");$("#".concat(a)).toggleClass("disabled",!t),$("#".concat(a)).attr("disabled",!t)}t(this),$(this).on("click",function(e){t(this)})});var c=$("div.oc-admin-se-list").data("ajaxurl");$("div.oc-admin-se-list").find("input#_wpnonce").remove(),$("div.oc-admin-se-list").find('input[name="_wp_http_referer"]').remove(),$("a.oc-admin-se-edit").on("click",function(e){e.preventDefault();var o,r=$(this).data("id"),t=$(this).parents("table.singleepisodes"),d=$('input[type="hidden"]#_wprls').val(),d=JSON.parse(window.atob(d));r&&t&&d&&(o=new Array,t.find("thead tr th").each(function(e,t){var a=$(t).attr("id");a&&"cd"!=a&&"name"!=a&&"actions"!=a&&o.push({id:a,displayname:$(t).text()})}),$.each(o,function(i,c){t.find('input[type="hidden"][data-id="'.concat(r,'"][data-key="').concat(c.id,'"].hidden-values')).each(function(e,t){var a,n=$(t).val();"usepermissions"==c.id?o[i].value=1==n:"permissions"==c.id?(Object.keys(c).includes("value")?(a=c.value).push(n):(a=new Array).push(n),c.value=a):o[i].value=n})}),Swal.fire({html:'<table id="swal-table" style="padding: 30px" class="form-table opencast-option-table" role="presentation"><tbody></tbody></table>',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:update_se_dialog_data.save_btn,cancelButtonText:update_se_dialog_data.cancel_btn,showLoaderOnConfirm:!0,onBeforeOpen:function(){var l=$("#swal2-content").find("#swal-table");l&&$.each(o,function(e,n){var t=$("<div class='input'></div>"),a=$("<tr></tr>"),i=$('<th scope="row"><label>'.concat(n.displayname,"</label></th>"));a.append(i);var c,o,r,s=$("<td></td>");"oc_id"==n.id||"class"==n.id?(c=$("<input type='text' class='regular-text' name='".concat(n.id,"' value='").concat(n.value,"'>")),s.append(t.append(c)),a.append(s)):"usepermissions"==n.id?((c=$("<input type='checkbox' data-child='permissions' class='regular-checkbox swal-checkbox' name='".concat(n.id,"'>"))).prop("checked",n.value),s.append(t.append(c)),a.append(s)):"permissions"==n.id&&(o=d.length,r=$("<select id='".concat(n.id,"-swal' placeholder='").concat(n.displayname,"' data-maxsize=").concat(o," multiple='multiple' class=\"oc-select2 swal-select2 trigger-disabled-child disabled\"></select>")),$.each(d,function(e,t){var a=$("<option value='".concat(e,"'>").concat(t,"</option>"));n.value&&n.value.includes(e)&&a.prop("selected",!0),r.append(a)}),s.append(t.append(r)),a.append(s)),l.append(a),l.find(".swal-checkbox").each(function(e,t){function a(e){var t=$(e).prop("checked"),a=$(e).data("child");$("#".concat(a,"-swal")).toggleClass("disabled",!t),$("#".concat(a,"-swal")).attr("disabled",!t)}a(t),$(t).on("click",function(e){a($(this))})}),l.find(".oc-select2").each(function(){$(this).select2({placeholder:$(this).attr("placeholder"),allowClear:!0,tags:!0,maximumSelectionSize:$(this).data("maxsize"),width:"resolve"})})})},preConfirm:function(){var e=$("#swal2-content").find("#swal-table");if(e){var t=e.find('input[type="text"][name="oc_id"]').val(),a=e.find('input[type="text"][name="class"]').val(),n=e.find('input[type="checkbox"][name="usepermissions"]').prop("checked"),i=e.find("select.swal-select2").val();return $.ajax({url:c,method:"POST",async:!0,data:{action:"opencast_update_se_ajax",se_id:r,oc_id:t,class:a,usepermissions:n,permissions:i}}).fail(function(e){Swal.showValidationMessage("Request failed: ".concat(e.statusText))})}},allowOutsideClick:function(){return!Swal.isLoading()}}).then(function(e){var t,a;e.value&&(t=update_se_dialog_data.result_success_msg,a="success",e.value.error&&(t=update_se_dialog_data.result_error_msg,a="warning"),Swal.fire({text:t,icon:a}).then(function(){s()}))}))}),$("a.oc-admin-se-delete").on("click",function(e){e.preventDefault();var t=$(this).data("id");t&&a(c,new Array(t))}),$("div.oc-admin-se-list").find(".bulkactions").each(function(e,t){$(t).find("select").each(function(e,t){$(t).removeAttr("name"),$(t).addClass("oc-admin-se-bulkaction")}),$(t).find('input[type="submit"]').each(function(e,t){$(t).on("click",function(e){var n;e.preventDefault(),e.stopPropagation(),"delete"==$(this).prev().val()&&(n=new Array,$('input[type="checkbox"].oc-cb-se-select:checked').each(function(e,t){var a=$(t).data("id");a&&n.push(a)}),a(c,n))})})})})},function(e,t){function i(e,t){Array.isArray(t)&&t.length&&Swal.fire({title:delete_confirm_data.title,text:delete_confirm_data.text,icon:"warning",showCancelButton:!0,showCloseButton:!0,confirmButtonColor:"green",cancelButtonColor:"red",confirmButtonText:delete_confirm_data.confirm_btn,cancelButtonText:delete_confirm_data.cancel_btn,showLoaderOnConfirm:!0,preConfirm:function(){return $.ajax({url:e,method:"POST",async:!0,data:{action:"opencast_video_delete_ajax",videos:t}}).fail(function(e){Swal.showValidationMessage("Request failed: ".concat(e.statusText))})},allowOutsideClick:function(){return!Swal.isLoading()}}).then(function(e){var t,a,n,i,c;e.value&&(console.log(e.value),t=delete_confirm_data.result_success_title,a=delete_confirm_data.result_success_msg,n="success",i=!0,e.value.success&&e.value.success.notdeleted&&(a=delete_confirm_data.result_success_partial_msg,n="warning",c=new Array,e.value.success.notdeleted.forEach(function(e,t){var a,n=$("a[data-id='".concat(e,"']"));n&&(a=n.parent().parent().find("td.title").text(),c.push("Video Title: ".concat(a)))}),c.length&&(a+="<br>"+c.join("<br>"))),e.value.error&&(t=delete_confirm_data.result_error_title,i=!1,n="error",a=e.value.error),Swal.fire(t,a,n).then(function(){i&&o()}))})}function o(e){var t=0<arguments.length&&void 0!==e?e:"";t?location.href=t:window.location.reload()}$(function(){var e,a,t;$(".oc-admin-video-list").is(":visible")&&(e=$(".oc-admin-video-list"),a=e.data("ajaxurl"),e.find("p.limit-box").find("input#limit-submit").on("click",function(e){e.preventDefault();var t=$(this).prev().val();t&&$.ajax({url:a,type:"POST",data:{action:"opencast_video_save_limit_ajax",oc_table_limit:t},success:function(e){var t;e.success&&((t=new URLSearchParams(window.location.search)).has("paged")&&t.delete("paged"),o(window.location.href.split("?")[0]+"?"+t.toString().replace("?","")))}})}),(t=e.find("p.search-box")).find("input#search-submit").on("click",function(e){e.preventDefault();var t,a=encodeURIComponent($(this).prev().val().trim());a&&((t=new URLSearchParams(window.location.search)).has("oc_search")?t.set("oc_search",a):t.append("oc_search",a),t.has("paged")?t.set("paged",1):t.append("paged",1),o(window.location.href.split("?")[0]+"?"+t.toString().replace("?","")))}),t.find("a#search-clear").on("click",function(e){e.preventDefault();var t=$(this).parent().find('input[type="text"]');t&&t.val("");var a=new URLSearchParams(window.location.search);a.has("oc_search")&&a.delete("oc_search"),a.has("paged")&&a.set("paged",1),o(window.location.href.split("?")[0]+"?"+a.toString().replace("?",""))}),$("a.oc-admin-video-delete").on("click",function(e){e.preventDefault();var t=$(this).data("id");void 0!==t&&i(a,new Array(t))}),$("input#doaction2, input#doaction").on("click",function(e){var n;"delete"==$(this).prev().val()&&(n=new Array,$('input[type="checkbox"].oc-cb-select:checked').each(function(e,t){var a=$(t).data("id");a&&n.push(a)}),i(a,n))}),$('input[type="checkbox"].oc-cb-select:checked').each(function(e,t){$(t).prop("checked",!1)}))})},function(e,t,a){}]);