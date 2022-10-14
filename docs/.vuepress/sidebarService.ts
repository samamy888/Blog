import path from "path";
import fs from 'fs';
import util from 'util';
import {sidebarItem} from './interface/sidebarItem'

export class service {
  getSidebar = async () => {
    const readdir = util.promisify(fs.readdir);
    const files = await readdir('./docs/article/');
    return this.getSidebarItem(files)
  };
  getSidebarItem = (files:string[]) => {
    var dicPath = new Set(files.map(x=>x.substring(0,4)))
    var result = Array<sidebarItem>();
    dicPath.forEach(x=>{
      var sameYearFiles = files.filter(y=>y.substring(0,4) === x).map(x=>`/article/${x}`)
      var item:sidebarItem = {
        text : x,
        collapsible : true,
        children : sameYearFiles
      }
      result.push(item)
    });
    console.log(result)
    return result.reverse()
  }
}

