import {PipeTransform,Pipe} from '@angular/core';
@Pipe ({name: 'sentencecase'})


export class SentenceCase implements PipeTransform{
    transform(str){
        let firstchar= str.charAt(0);
        let restchar= str.substring(1);
        let sentence= firstchar.toUpperCase() + restchar.toLowerCase();
        return sentence; 
    }
}