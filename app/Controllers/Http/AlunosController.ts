import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

let alunos : {rga:string, nome:string, curso:string}[] = []


//Metodo Get 
export default class AlunosController {

  public async index({request}:HttpContextContract) {
    const {rga} = request.qs();
    if(rga){
        let aluno = alunos.find((aluno)=>aluno.rga == rga)
        if(aluno){
            return aluno
        }
        return 'Nota de Falecimento'
    }

    return alunos.length == 0 ? 'Não foram adicionados Alunos' : alunos;

  }

    public async store({request}:HttpContextContract){
        const {rga,nome,curso} = request.body();
        if(rga && nome && curso){
            let aluno = {rga,nome,curso}
            console.log(aluno);
            alunos.push(aluno);
            return 'Aluno adicionado'
        }
        return 'Deu não ;-;'
    }
}




