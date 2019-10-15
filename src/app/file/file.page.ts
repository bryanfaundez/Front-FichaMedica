import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import{NavController} from '@ionic/angular'
import * as firebase from 'firebase/app';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  returnpath:string=""
  constructor(private fileChooser: FileChooser,private file: File,public navCtrl : NavController,) { }

  ngOnInit() {
  }

choose(){
    this.fileChooser.open().then((uri)=>{
      alert(uri);
      this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
        alert(JSON.stringify(newUrl));
        let dirPath= newUrl.nativeURL;
        let dirPathSegments=dirPath.split('/')
        dirPathSegments.pop()
        dirPath= dirPathSegments.join('/')
         this.file.readAsArrayBuffer(dirPath,newUrl.name).then(async (buffer)=>{
          await this.upload(buffer,newUrl.name)
         })
      })
    })

}
upload(buffer,name){
  let blob = new Blob([buffer],{type :"image/jpeg"});
  let storage =firebase.storage();
  storage.ref('images'+name).put(blob).then((d)=>{
    alert("Done")
  }).catch((error)=>{
      alert(JSON.stringify(error))
  })
}




}
