import path from "path";
import fs from 'fs';
import util from 'util';
import { ref } from "vue";

const readdir = util.promisify(fs.readdir);
export class service {
  getSidebar = async () => {

    const sidebar = ref<string[]>([]);
    const files = await readdir('./docs/article/');
    sidebar.value = files.map(x=>`/article/${x}`);
    return sidebar.value
  };
}
