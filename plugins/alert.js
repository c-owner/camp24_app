import Swal from 'sweetalert2'
import Vue from "vue";

/****************************
 * Developer : corner
 * Description :
 alert 관련 메시지 이벤트 저장 후 사용
 ****************************/

export default (context, inject, app) => {
    const swal = {
        alert(params) {
            Swal.fire({
                title: !params.title ? '' : params.title,
                html: !params.content ? '' : params.content,
                confirmButtonText: params.confirmText ? params.confirmText : '확인',
                cancelButtonText: params.cancelText ? params.cancelText : '취소',
                customClass: params.classname ? params.classname : 'corner_alert',
                showCancelButton: params.cancelBtn ? params.cancelBtn : false,
                showCloseButton: params.closeBtn ? params.closeBtn : false,
                reverseButtons: params.reverseBtn ? params.reverseBtn : false,
                //check면 chk_alert 클래스.
            }).then((r) => {
                if (r.value) {
                    if (params.confirm)
                        params.confirm();
                } else if (r.dismiss === 'close') {
                    if (params.close)
                        params.close();
                } else if (r.dismiss === 'backdrop') {
                    if (params.hide)
                        params.hide();
                } else if (r.dismiss === 'cancel') {
                    if (params.cancel)
                        params.cancel();

                }
            });
        },
        confirm(params) {
            Swal.fire({
                title: !params.title ? '' : params.title,
                html: !params.content ? '' : params.content,
                confirmButtonText: params.confirmText ? params.confirmText : '확인',
                cancelButtonText: params.cancelText ? params.cancelText : '취소',
                customClass: params.classname ? params.classname : 'corner_confirm',
                showConfirmBtn: params.confirmBtn ? params.confirmBtn : true,
                showCancelButton: params.cancelBtn ? params.cancelBtn : false,
                showCloseButton: params.closeBtn ? params.closeBtn : false,
                reverseButtons: params.reverseBtn ? params.reverseBtn : false,
            }).then((r) => {
                if (r.value) {
                    params.confirm();
                } else if (r.dismiss === 'cancel') {
                    if (params.cancel)
                        params.cancel();
                } else if (r.dismiss === 'backdrop') {
                    if (params.hide)
                        params.hide();
                } else if (r.dismiss === 'close') {
                    if (params.close) params.close();
                    else params.cancel();
                }
            })
        },

    }

    inject('alert', swal);
}
