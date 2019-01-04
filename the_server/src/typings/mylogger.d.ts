

interface l{

    log(message: string) ;
    error(message: string) ;

}


declare module "l" {
    export = l;
}
//declare var  console: l;

declare var  l: l;