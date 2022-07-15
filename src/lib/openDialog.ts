import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options:any) => {
  const { title, content, ok, cancel,closeOnclickOverlay } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          closeOnclickOverlay,
          "onUpdate:visible": (newVisible:boolean) => {
            if (!newVisible) {
              close();
            }
          },
          ok,
          cancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};