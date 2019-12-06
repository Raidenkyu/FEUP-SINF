const saftFile = require('../files/json/saft-demo1');
const saft = saftFile.jsonObj;


startUp();

function startUp () {
    
    console.log('Saft Version:', saft.AuditFile.Header.AuditFileVersion);
    createBalanceSheet();

}


function createBalanceSheet () {
    let balanceSheet = {
        'Ativo': {
            'Ativo não corrente': {
                'Ativos fixos tangíveis': 0,                        // 268+269+270+271+272+273+274-275-276-277-278-279-280-281-282-283-284-285-286-287-288+306+310-314-318
                'Propriedades de investimento': 0,                  // 259+260+261-262-263-264-265-266-267+305+309-313-317
                'Goodwill': 0,                                      // 217+222+227-236-237-238-240-245-250+289-294-299
                'Ativos intangíveis': 0,                            // 290+291+292+293-295-296-297-298-300-301-302-303+307+311-315-319
                'Ativos biológicos': 0,                             // 197+198-200-202+215
                'Participações financeiras': 0,                     // 216+221+226-239-244-249
                'Outros investimentos financeiros': 0,              // 218+219+220+223+224+225+228+229+230+231+232+233+234+235-241-242-243-246-247-248-251-252-253-254-255-256-257-258+304+308-312-316
                'Créditos a receber': 0,                            // 62+64-68-70+112+114-121-123+125+127+129+139-141-145 (Se saldo devedor ver taxonomias)
                'Ativos por impostos diferidos': 0,                 // 133-143
                'Investimentos financeiros': 0,                     // TODO: Ver isto com o prof
                'Créditos e outros ativos não correntes': 0         // TODO: Ver isto com o prof
            },

            'Ativo corrente': {
                'Inventários': 0,                                   //  165+166+167-168-169-170+171+172+173+174+175+176-177-178-179-180-181-182+183+184-185-186+187+188+189-190-191-192+193-194+209+210+211+212+213
                'Ativos biológicos': 0,                             //  195+196-199-201+214
                'Clientes': 0,                                      //  10+11+12+13+14+15+16+17+18+19+20+21+22-24-25-26-27-28-29-30-31-32-33-34-35-36 (Se saldo devedor, ver taxonomias)
                'Estado e outros entes públicos': 0,                //  71+73+74+76+77+79+80+81+82+83+84+85 (Se saldo devedor, ver taxonomias)
                'Capital subscrito e não realizado': 0,             //  106+107-115-116
                'Outros créditos a receber': 0,                     //  37+38+39+40+41+42+43+44+45+46+47+48+49+50+51-52+55+56+61+63-65-66-67-69+108+109+110+111+113-117-118-119-120-122+124+126+128+130+138-140-142-144 (Se Saldo devedor, ver taxonomias)
                'Diferimentos': 0,                                  //  146
                'Ativos financeiros detidos para negociação': 0,    //  4+6
                'Outros ativos financeiros': 0,                     //  8
                'Ativos não correntes detidos para venda': 0,       //  320+321+322+323+324-326-327-328-329-330
                'Outros ativos correntes': 0,                       //  TODO: Ver isto com o prof
                'Caixa e depósitos bancários': 0                    //  1+2+3 (Se Saldo devedor, ver taxonomias)   
            },

            'Total do Ativo': 0
        },

        'Capital Próprio e Passivo': {
            'Capital Próprio': {
                'Capital subscrito': 0,                                     //  331
                'Ações (quotas) próprias': 0,                               //  -332-333 [Se saldo devedor ver taxonomias]
                'Outros instrumentos de capital próprio': 0,                //  334
                'Prémios de emissão': 0,                                    //  335
                'Reservas legais': 0,                                       //  336 
                'Outras reservas': 0,                                       //  337
                'Excedentes de revalorização': 0,                           //  343-344+345-346
                'Ajustamentos / outras variações no capital próprio': 0,    //  -339+340-341-342-347-348+349-350+351-352 (Se Saldo devedor, ver taxonomias)   
                'Resultado líquido do período': 0,                          //  -646 (Se Saldo devedor, ver taxonomias)
                'Dividendos antecipados': 0,                                //  -647

                'Total do Capital Próprio': 0
            },

            'Passivo': {
                'Passivo Não Corrente': {
                    'Provisões': 0,                                         //  148+149+150+151+152+153+154+155
                    'Financiamentos obtidos': 0,                            //  87+89+91+93+95+97+99+101+103+105
                    'Responsabilidades por benefícios pós-emprego': 0,      //  132
                    'Passivos por impostos diferidos': 0,                   //  134
                    'Outras dívidas a pagar': 0                             //  58+60+62+64+114+125+127+136+139 (Se Saldo devedor, ver taxonomias)
                },
                'Passivo Corrente': {
                    'Fornecedores': 0,                                      //  37+38+39+40+41+42+43+44+45+46+47+48+49+50           (Se Saldo devedor, ver taxonomias)
                    'Adiantamentos de clientes': 0,                         //  10+11+12+13+14+15+16+17+18+19+20+21+22+23+137       (Se Saldo devedor, ver taxonomias)
                    'Estado e outros entes públicos': 0,                    //  71+72+75+76+77+78+81+82+83+84+85                    (Se Saldo devedor, ver taxonomias)
                    'Financiamentos obtidos': 0,                            //  2+3+86+88+90+92+94+96+98+100+102+104                (Se Saldo devedor, ver taxonomias)
                    'Outras dívidas a pagar': 0,                            //  53+54+57+59+61+63+109+110+113+124+126+131+135+138   (Se Saldo devedor, ver taxonomias)
                    'Diferimentos': 0,                                      //  147
                    'Passivos financeiros detidos para negociação': 0,      //  5+7
                    'Outros passivos financeiros': 0,                       //  9
                    'Passivos não correntes detidos para venda': 0,         //  325
                    'Outros passivos correntes': 0,                         //  TODO: Ver com o prof
                },
                'Total do Passivo': 0
            },

            'Total do Capital Próprio e do Passivo': 0
        }
    }


    saft.AuditFile.MasterFiles.GeneralLedgerAccounts.Account.forEach((account) => {
        const accountId = account.AccountID;
        const accountBal = account.ClosingDebitBalance - account.ClosingCreditBalance;
        let accountTaxCode = account.TaxonomyCode;
        
        if (accountTaxCode === undefined)
            return;

        accountTaxCode = parseInt(accountTaxCode);

        switch (accountTaxCode) {
            case 268:
            case 269:
            case 270:
            case 271:
            case 272:
            case 273:
            case 274:
            case 306:
            case 310:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos fixos tangíveis'], accountBal);
                break;
            case 275:
            case 276:
            case 277:
            case 278:
            case 279:
            case 280:
            case 281:
            case 282:
            case 283:
            case 284:
            case 285:
            case 286:
            case 287:
            case 288:
            case 314:
            case 318:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos fixos tangíveis'], -accountBal);
                break;
            //=======================//
            case 259:
            case 260:
            case 261:
            case 305:
            case 309:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Propriedades de investimento'], accountBal);
                break;
            case 262:
            case 263:
            case 264:
            case 265:
            case 266:
            case 267:
            case 313:
            case 317:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Propriedades de investimento'], -accountBal);
                break;
            //=======================//
            case 217:
            case 222:
            case 227:
            case 289:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Goodwill'], accountBal);
                break;
            case 236:
            case 237:
            case 238:
            case 240:
            case 245:
            case 250:
            case 294:
            case 299:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Goodwill'], -accountBal);
                break;
            //=======================//
            case 290:
            case 291:
            case 292:
            case 293:
            case 307:
            case 311:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos intangíveis'], accountBal);
                break;
            case 295:
            case 296:
            case 297:
            case 298:
            case 300:
            case 301:
            case 302:
            case 303:
            case 315:
            case 319:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos intangíveis'], -accountBal);
                break;
            //=======================//
            case 197:
            case 198:
            case 215:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos biológicos'], accountBal);
                break;
            case 200:
            case 202:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos biológicos'], -accountBal);
                break;
            //=======================//
            case 216:
            case 221:
            case 226:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Participações financeiras'], accountBal);
                break;          
            case 239:
            case 244:
            case 249:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Participações financeiras'], -accountBal);
                break;
            //=======================//
            case 218:
            case 219:
            case 220:
            case 223:
            case 224:
            case 225:
            case 228:
            case 229:
            case 230:
            case 231:
            case 232:
            case 233:
            case 234:
            case 235:
            case 304:
            case 308:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Outros investimentos financeiros'], accountBal);
                break;
            case 241:
            case 242:
            case 243:
            case 246:
            case 247:
            case 248:
            case 251:
            case 252:
            case 253:
            case 254:
            case 255:
            case 256:
            case 257:
            case 258:
            case 312:
            case 316:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Outros investimentos financeiros'], -accountBal);
                break;
            //=======================//
            case 62:
            case 64:
            case 112:
            case 114:
            case 125:
            case 127:
            case 129:
            case 139:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Créditos a receber'], accountBal);
                break;
            case 68:
            case 70:
            case 121:
            case 123:
            case 141:
            case 145:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Créditos a receber'], -accountBal);
                break;
            //=======================//
            case 133:
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos por impostos diferidos'], accountBal);
                break;              
            case 143:       
                addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos por impostos diferidos'], -accountBal);
                break;
            //=======================//



            //=======================//


            //=======================//


            /* 
            
       




            */

            

            //=======================//

            default:
                console.log("Unhandled Taxonomy Code:", accountTaxCode);
                break;
        }

    });


    console.log(balanceSheet);





    // for tests
    // addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos fixos tangíveis'], 123);
    // addValue(balanceSheet, ['Ativo', 'Ativo não corrente', 'Ativos fixos tangíveis'], 123);
    // addValue(balanceSheet, ['Capital Próprio e Passivo', 'Passivo', 'Passivo Não Corrente', 'Provisões'], 999);

    // to see tests
    // console.log(balanceSheet);
    // console.log('=============================');
    // console.log(balanceSheet['Capital Próprio e Passivo']['Passivo']);
}



function addValue(obj, path, value) {

    let fullPath = obj[path[0]];
    // check if path exists
    for (let i = 1; i < path.length; i++) {
        if ( fullPath[path[i]] === undefined ) {
            console.log('ERROR: Setting undefined path:', path);
            return;
        } else {
            fullPath = fullPath[path[i]];
        }
    }

    // check if trying to set an object instead of a number
    if ( isNaN(fullPath) ) {
        console.log('ERROR: Setting entire object and not a number on path:', path);
        return;
    }

    // this can probably be improved to be dynamic, works for 3 lvls
    switch (path.length) {
        case 1:
            obj[path[0]] += value;
            break;

        case 2:
            obj[path[0]][path[1]] += value;
            break;

        case 3:
            obj[path[0]][path[1]][path[2]] += value;
            break;

        case 4:
            obj[path[0]][path[1]][path[2]][path[3]] += value;
            break;

        default:
            console.log("ERROR: Entered default in object addValue");
            break;
    }

}
