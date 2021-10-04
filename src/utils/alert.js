import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./alert.css";
export const MySwal = withReactContent(Swal);
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});
export const ConfirmDelete = async () => {
  let res = await MySwal.fire({
    title: "Do you want to delete item ?",

    //text: "To delete: "+txt,
    //type: 'warning',
    showCancelButton: true,
    confirmButtonColor: "",
    cancelButtonColor: "",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    showCloseButton: true,
    // showClass: {
    //   popup: "animated fadeInDown faster",
    //   backdrop: "swal-overlay",
    //   //icon: '',
    // },
    // hideClass: {
    //   popup: "animated fadeOutUp faster",
    // },
  });
  return res.value || false;
};
export const ConfirmSave = async () => {
  let res = await MySwal.fire({
    title: "This plan will be execute immediately after submit.",
    showCancelButton: true,
    confirmButtonColor: "",
    cancelButtonColor: "",
    confirmButtonText: "ok",
    cancelButtonText: "cancel",
    showCloseButton: true,
  });
  return res.value || false;
};
export const ConfirmCommon = async (text = "", yes = "yes", no = "no") => {
  let res = await MySwal.fire({
    title: text,
    showCancelButton: true,
    confirmButtonColor: "",
    cancelButtonColor: "",
    confirmButtonText: yes,
    cancelButtonText: no,
    showCloseButton: true,
  });
  return res.value || false;
};
export const del_success = () => {
  MySwal.fire({
    icon: "success",
    title: "Deleted!",
    showConfirmButton: false,
    timer: 1500,
  });
};
export const inform_success = async (txt) => {
  await MySwal.fire({
    icon: "success",
    title: txt || "success!",
    showConfirmButton: false,
    timer: 1000,
  });
};
export const apiError = (err) => {
  Toast.fire({
    icon: "error",
    title: "Api Error",
  });
  console.error("Toast", err);
};
export async function Inform(txt = "", html) {
  await MySwal.fire(txt, html);
}
export async function Informcurrentedit() {
  await Inform(
    "There is an uncommitted execution plan edit session. Please complete the edit session."
  );
}
