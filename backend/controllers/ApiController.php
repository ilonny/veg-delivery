<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;
use common\models\LoginForm;
use backend\models\Category;
use backend\models\Size;
use backend\models\Product;
use backend\models\UploadForm;
use backend\models\Color;
use yii\web\UploadedFile;
use yii\helpers\Json;
use yii\web\Response;
use DateTime;
use yii\filters\Cors;
use yii\filters\auth\HttpBasicAuth;
/**
 * Category controller
 */
class ApiController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Access-Control-Allow-Origin' => ['*'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 86400,
                'Access-Control-Expose-Headers' => [],
            ]
        ];
        return $behaviors;
    }
    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex($category_id = 0)
    {
        return Json::encode([
            'hello' => 'can i help?'
        ]);
    }

    public function actionContact()
    {
        $request = Yii::$app->request;
        $post = $request->post();
        // var_dump($post);
        $to = 'lonnyfox@bk.ru';
        // тема письма
        $subject = 'Обратная связь vegfood.delivery';
        // текст письма
        $message = '
        <html>
        <head>
        <title>Обратная связь vegfood.delivery</title>
        </head>
        <body>
        <table>
            <tbody>
                <tr>
                    <td>Имя: </td>
                    <td>'.$post['name'].'</td>
                </tr>
                <tr>
                    <td>Телефон: </td>
                    <td>'.$post['phone'].'</td>
                </tr>
                <tr>
                    <td>Почта: </td>
                    <td>'.$post['email'].'</td>
                </tr>
                <tr>
                    <td>Сообщение: </td>
                    <td>'.$post['message'].'</td>
                </tr>
            </tbody>
        </table>
        </body>
        </html>
        ';

        // Для отправки HTML-письма должен быть установлен заголовок Content-type
        $headers[] = 'MIME-Version: 1.0';
        //. "\r\n";
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';

        // Дополнительные заголовки
        $headers[] = 'To: Dmitry <lonnyfox@bk.ru>';
        $headers[] = 'From: VegFood Delivery <admin@vegfood.delivery>';
        // $headers[] = 'Cc: birthdayarchive@example.com';
        // $headers[] = 'Bcc: birthdaycheck@example.com';

        // Отправляем
        $result = mail($to, $subject, $message, implode("\r\n", $headers));
        // Yii::$app->mailer->compose()
        //     ->setFrom('admin@vegfood.delivery')
        //     ->setTo('lonnyfox@bk.ru')
        //     ->setSubject('Обратная связь vegfood.delivery')
        //     // ->setTextBody('Текст сообщения')
        //     ->setHtmlBody('
        //         <table>
        //             <tbody>
        //                 <tr>
        //                     <td>Имя: </td>
        //                     <td>'.$post['name'].'</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Телефон: </td>
        //                     <td>'.$post['phone'].'</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Почта: </td>
        //                     <td>'.$post['email'].'</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Сообщение: </td>
        //                     <td>'.$post['message'].'</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     ')
        //     ->send();
            return $this->asJson(['status' => 200]);
    }

    public function actionAbout()
    {
        return '
        <style type="text/css">
<!--
span.cls_002{font-family:Courier New,serif;font-size:20.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
div.cls_002{font-family:Courier New,serif;font-size:20.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_017{font-family:Courier New,serif;font-size:20.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: line-through}
div.cls_017{font-family:Courier New,serif;font-size:20.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_004{font-family:Arial,serif;font-size:11.6px;color:rgb(46,46,51);font-weight:normal;font-style:normal;text-decoration: none}
div.cls_004{font-family:Arial,serif;font-size:11.6px;color:rgb(46,46,51);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_006{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
div.cls_006{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
span.cls_008{font-family:Arial,serif;font-size:10.1px;color:rgb(46,46,51);font-weight:normal;font-style:normal;text-decoration: none}
div.cls_008{font-family:Arial,serif;font-size:10.1px;color:rgb(46,46,51);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_018{font-family:Arial,serif;font-size:11.6px;color:rgb(13,198,69);font-weight:normal;font-style:normal;text-decoration: underline}
div.cls_018{font-family:Arial,serif;font-size:11.6px;color:rgb(13,198,69);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_010{font-family:Courier New,serif;font-size:11.6px;color:rgb(13,198,69);font-weight:normal;font-style:normal;text-decoration: none}
div.cls_010{font-family:Courier New,serif;font-size:11.6px;color:rgb(13,198,69);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_007{font-family:Courier New,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
div.cls_007{font-family:Courier New,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_011{font-family:Arial,serif;font-size:16.6px;color:rgb(46,46,51);font-weight:normal;font-style:normal;text-decoration: none}
div.cls_011{font-family:Arial,serif;font-size:16.6px;color:rgb(46,46,51);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_012{font-family:Arial,serif;font-size:11.6px;color:rgb(46,46,51);font-weight:bold;font-style:normal;text-decoration: none}
div.cls_012{font-family:Arial,serif;font-size:11.6px;color:rgb(46,46,51);font-weight:bold;font-style:normal;text-decoration: none}
span.cls_013{font-family:Courier New,serif;font-size:11.6px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
div.cls_013{font-family:Courier New,serif;font-size:11.6px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
span.cls_019{font-family:Arial,serif;font-size:11.6px;color:rgb(13,198,69);font-weight:bold;font-style:normal;text-decoration: underline}
div.cls_019{font-family:Arial,serif;font-size:11.6px;color:rgb(13,198,69);font-weight:bold;font-style:normal;text-decoration: none}
-->
</style>
        <div style="position:absolute;left:50%;margin-left:-298px;top:0px;width:596px;height:843px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
        <img src="26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_id_26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_files/background1.jpg" width=596 height=843></div>
        <div style="position:absolute;left:158.68px;top:55.80px" class="cls_002"><span class="cls_002">Пол</span><span class="cls_017">ь</span><span class="cls_002">зо</span><span class="cls_017">в</span><span class="cls_002">ательское</span></div>
        <div style="position:absolute;left:218.73px;top:82.82px" class="cls_002"><span class="cls_002">соглаш</span><span class="cls_017">е</span><span class="cls_002">ние</span></div>
        <div style="position:absolute;left:85.11px;top:116.85px" class="cls_004"><span class="cls_004">Настоящее Пользовательское Соглашение регулирует отношения между _____</span></div>
        <div style="position:absolute;left:85.11px;top:129.61px" class="cls_004"><span class="cls_004">«_______________» ОГРН _______ (далее именуемое - </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">), и</span></div>
        <div style="position:absolute;left:85.11px;top:143.12px" class="cls_004"><span class="cls_004">пользователем сети Интернет (далее - Пользователь) по использованию сервиса</span></div>
        <div style="position:absolute;left:85.11px;top:156.63px" class="cls_006"><span class="cls_006">VegFood.delivery</span></div>
        <div style="position:absolute;left:85.11px;top:177.65px" class="cls_004"><span class="cls_004">Перед использованием сервиса </span><span class="cls_006">VegFood.delivery. </span><span class="cls_004">Пользователь обязан ознакомиться</span></div>
        <div style="position:absolute;left:85.11px;top:191.16px" class="cls_004"><span class="cls_004">с настоящим Пользовательским Соглашением и в случае согласия с положениями</span></div>
        <div style="position:absolute;left:85.11px;top:204.67px" class="cls_004"><span class="cls_004">Пользовательского соглашения присоединиться к нему путем совершения одного из</span></div>
        <div style="position:absolute;left:85.11px;top:217.43px" class="cls_004"><span class="cls_004">следующих конклюдентных действий:</span></div>
        <div style="position:absolute;left:67.10px;top:246.71px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:245.21px" class="cls_004"><span class="cls_004">Нажатие кнопки «Войти» при регистрации по номеру мобильного телефона, на</span></div>
        <div style="position:absolute;left:85.11px;top:257.97px" class="cls_004"><span class="cls_004">сайте _______________, приложении </span><span class="cls_006">VegFood.delivery</span></div>
        <div style="position:absolute;left:67.10px;top:281.99px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:280.49px" class="cls_004"><span class="cls_004">Нажатие кнопки «Войти или создать аккаунт» с использованием VK Connect или иного</span></div>
        <div style="position:absolute;left:85.11px;top:293.25px" class="cls_004"><span class="cls_004">сервиса третьего лица;</span></div>
        <div style="position:absolute;left:67.10px;top:317.27px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:315.77px" class="cls_004"><span class="cls_004">Нажатие кнопки «Оформить заказ/Заказать» при оформлении заказа Пользователем</span></div>
        <div style="position:absolute;left:85.11px;top:329.28px" class="cls_004"><span class="cls_004">без авторизации на сайте </span><span class="cls_018">_<A HREF="https://www.delivery-club.ru/">__________</A> </span><span class="cls_010"> </span><span class="cls_004">либо приложении </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">, в том</span></div>
        <div style="position:absolute;left:85.11px;top:342.04px" class="cls_004"><span class="cls_004">числе, мобильном либо приложении в социальных сетях (далее по тексту настоящего</span></div>
        <div style="position:absolute;left:85.11px;top:355.55px" class="cls_004"><span class="cls_004">Соглашения именуемые - Сайт/сервис).</span></div>
        <div style="position:absolute;left:67.10px;top:379.57px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:378.07px" class="cls_004"><span class="cls_004">Оформления заказа по телефону контактного центра </span><span class="cls_006">VegFood.delivery</span><span class="cls_007"> </span><span class="cls_004">(применимо</span></div>
        <div style="position:absolute;left:85.11px;top:390.83px" class="cls_004"><span class="cls_004">только в случае наличия такого способа для определенного региона, а именно: на</span></div>
        <div style="position:absolute;left:85.11px;top:404.34px" class="cls_004"><span class="cls_004">сервисе должен быть указан специальный номер телефона для заказов).</span></div>
        <div style="position:absolute;left:85.11px;top:426.11px" class="cls_004"><span class="cls_004">Присоединяясь к настоящему Пользовательскому Соглашению, Пользователь</span></div>
        <div style="position:absolute;left:85.11px;top:439.62px" class="cls_004"><span class="cls_004">выражает полное и безоговорочное согласие со всеми его условиями, в том числе, в</span></div>
        <div style="position:absolute;left:85.11px;top:453.13px" class="cls_004"><span class="cls_004">части предоставления согласия </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">на обработку персональных данных</span></div>
        <div style="position:absolute;left:85.11px;top:465.89px" class="cls_004"><span class="cls_004">Пользователя на условиях, указанных в разделе 8 настоящего Пользовательского</span></div>
        <div style="position:absolute;left:85.11px;top:479.40px" class="cls_004"><span class="cls_004">соглашения, и на получение рассылок информационного и рекламного содержания.</span></div>
        <div style="position:absolute;left:85.11px;top:501.92px" class="cls_004"><span class="cls_004">Присоединяясь к настоящему Пользовательскому Соглашению, Пользователь</span></div>
        <div style="position:absolute;left:85.11px;top:514.68px" class="cls_004"><span class="cls_004">подтверждает, что он:</span></div>
        <div style="position:absolute;left:67.10px;top:543.96px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:542.46px" class="cls_004"><span class="cls_004">ознакомился с офертой </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">о заключении договора на доставку заказа</span></div>
        <div style="position:absolute;left:85.11px;top:555.22px" class="cls_004"><span class="cls_004">(далее - «Договор на доставку заказа», размещенную в сети Интернет по</span></div>
        <div style="position:absolute;left:85.11px;top:568.73px" class="cls_004"><span class="cls_004">адресу: ________________</span></div>
        <div style="position:absolute;left:67.10px;top:592.00px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:590.50px" class="cls_004"><span class="cls_004">согласен с её условиями и принимает (акцептует) указанную оферту в момент</span></div>
        <div style="position:absolute;left:85.11px;top:604.01px" class="cls_004"><span class="cls_004">присоединения к настоящему Пользовательскому Соглашению.</span></div>
        <div style="position:absolute;left:67.10px;top:635.03px" class="cls_011"><span class="cls_011">1.  Предмет Пользовательского Соглашения</span></div>
        <div style="position:absolute;left:67.10px;top:654.30px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:654.30px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">предлагает Пользователю доступ к сервису быстрого поиска и</span></div>
        <div style="position:absolute;left:85.11px;top:667.81px" class="cls_004"><span class="cls_004">заказа готовой еды на условиях, предусмотренных настоящим Пользовательским</span></div>
        <div style="position:absolute;left:85.11px;top:680.57px" class="cls_004"><span class="cls_004">Соглашением. Указанные услуги носят информационный характер и оказываются</span></div>
        <div style="position:absolute;left:85.11px;top:694.08px" class="cls_004"><span class="cls_004">Пользователю безвозмездно.</span></div>
        <div style="position:absolute;left:67.10px;top:716.60px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:716.60px" class="cls_004"><span class="cls_004">Настоящее Соглашение может быть изменено </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">в одностороннем</span></div>
        <div style="position:absolute;left:85.11px;top:729.36px" class="cls_004"><span class="cls_004">порядке без предварительного уведомления. Новая редакция Соглашения вступает в</span></div>
        <div style="position:absolute;left:85.11px;top:742.88px" class="cls_004"><span class="cls_004">силу с момента ее опубликования на странице сайта_______________________, если</span></div>
        <div style="position:absolute;left:85.11px;top:755.64px" class="cls_004"><span class="cls_004">иное не предусмотрено новой редакцией Соглашения.</span></div>
        </div>
        <div style="position:absolute;left:50%;margin-left:-298px;top:853px;width:596px;height:843px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
        <img src="26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_id_26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_files/background2.jpg" width=596 height=843></div>
        <div style="position:absolute;left:67.10px;top:56.05px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:56.05px" class="cls_004"><span class="cls_004">Пользователь вправе отказаться от принятия изменений Соглашения,</span></div>
        <div style="position:absolute;left:85.11px;top:68.81px" class="cls_004"><span class="cls_004">осуществленных </span><span class="cls_006">VegFood.delivery, </span><span class="cls_004">что означает отказ Пользователя от</span></div>
        <div style="position:absolute;left:85.11px;top:82.32px" class="cls_004"><span class="cls_004">использования сервиса </span><span class="cls_006">VegFood.delivery</span></div>
        <div style="position:absolute;left:67.10px;top:104.84px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:104.84px" class="cls_004"><span class="cls_004">Объем доступа Пользователя к сервису </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">зависит от региона и</span></div>
        <div style="position:absolute;left:85.11px;top:117.60px" class="cls_004"><span class="cls_004">адреса доставки, зоны доставки Партнера, наличия конкретных блюд питания,</span></div>
        <div style="position:absolute;left:85.11px;top:131.11px" class="cls_004"><span class="cls_004">нагрузки и режима работы Партнера и других обстоятельств, которые могут повлиять</span></div>
        <div style="position:absolute;left:85.11px;top:143.87px" class="cls_004"><span class="cls_004">на функциональность Сайта для конкретного Пользователя.</span></div>
        <div style="position:absolute;left:67.10px;top:166.39px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:166.39px" class="cls_004"><span class="cls_004">Информация о меню, наличии конкретных блюд/напитков, их составе, а также</span></div>
        <div style="position:absolute;left:85.11px;top:179.90px" class="cls_004"><span class="cls_004">доставке (в случае, если она осуществляется Партнером </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">)</span></div>
        <div style="position:absolute;left:85.11px;top:192.66px" class="cls_004"><span class="cls_004">предоставляется Партнером </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">. </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">не несет</span></div>
        <div style="position:absolute;left:85.11px;top:206.18px" class="cls_004"><span class="cls_004">ответственность за актуальность и достоверность такой информации.</span></div>
        <div style="position:absolute;left:67.10px;top:237.20px" class="cls_011"><span class="cls_011">2. Описание услуг</span></div>
        <div style="position:absolute;left:67.10px;top:256.47px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:256.47px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">является единой информационной системой заказов, которая</span></div>
        <div style="position:absolute;left:85.11px;top:269.98px" class="cls_004"><span class="cls_004">предлагает пользователям широкие возможности для поиска и заказа готовой еды,</span></div>
        <div style="position:absolute;left:85.11px;top:282.74px" class="cls_004"><span class="cls_004">реализуемой Партнерами </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">, а также принимает от Пользователей</span></div>
        <div style="position:absolute;left:85.11px;top:296.25px" class="cls_004"><span class="cls_004">денежные средства в счет оплаты заказов и может на основании договора с</span></div>
        <div style="position:absolute;left:85.11px;top:309.01px" class="cls_004"><span class="cls_004">Партнерами </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">совместно с Пользователями привлекать третьих лиц</span></div>
        <div style="position:absolute;left:85.11px;top:322.52px" class="cls_004"><span class="cls_004">для доставки заказов Пользователям.</span></div>
        <div style="position:absolute;left:67.10px;top:345.04px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:85.11px;top:345.04px" class="cls_004"><span class="cls_004">Правоотношения по купле-продаже готовых блюд питания и продуктов (и их доставки</span></div>
        <div style="position:absolute;left:85.11px;top:357.80px" class="cls_004"><span class="cls_004">в случае, если доставку осуществляет Партнер) возникают непосредственно между</span></div>
        <div style="position:absolute;left:85.11px;top:371.31px" class="cls_004"><span class="cls_004">Партнером </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">и Пользователем (за исключением случаев, указанных</span></div>
        <div style="position:absolute;left:85.11px;top:384.83px" class="cls_004"><span class="cls_004">ниже). </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">не является стороной сделки по реализации товаров</span></div>
        <div style="position:absolute;left:85.11px;top:397.59px" class="cls_004"><span class="cls_004">Партнера Пользователю, при этом отдельно оговаривается, что по поручению</span></div>
        <div style="position:absolute;left:85.11px;top:411.10px" class="cls_004"><span class="cls_004">Партнера </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">вправе осуществлять прием платежей в соответствии с</span></div>
        <div style="position:absolute;left:85.11px;top:423.86px" class="cls_004"><span class="cls_004">положениями настоящего раздела.</span></div>
        <div style="position:absolute;left:67.10px;top:446.38px" class="cls_004"><span class="cls_004">1.</span></div>
        <div style="position:absolute;left:88.31px;top:446.38px" class="cls_004"><span class="cls_004">Пользователь соглашается с тем, что при оформлении Заказа товаров из магазинов</span></div>
        <div style="position:absolute;left:85.11px;top:459.89px" class="cls_004"><span class="cls_004">фактическая стоимость Заказа может отличаться от стоимости Заказа,</span></div>
        <div style="position:absolute;left:85.11px;top:472.65px" class="cls_004"><span class="cls_004">ретранслированной магазинами на сервис </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">в связи с</span></div>
        <div style="position:absolute;left:85.11px;top:486.16px" class="cls_004"><span class="cls_004">корректировками весовых товаров, а также возможным фактическим отсутствием</span></div>
        <div style="position:absolute;left:85.11px;top:499.67px" class="cls_004"><span class="cls_004">товаров в магазине, при этом при оформлении Заказа на банковской карте</span></div>
        <div style="position:absolute;left:85.11px;top:512.43px" class="cls_004"><span class="cls_004">Пользователя может быть заблокирована сумма, превышающая стоимость Заказа не</span></div>
        <div style="position:absolute;left:85.11px;top:525.94px" class="cls_004"><span class="cls_004">более 10% от стоимости Заказа. В случае, если фактическая стоимость Заказа ниже</span></div>
        <div style="position:absolute;left:85.11px;top:539.46px" class="cls_004"><span class="cls_004">заблокированной суммы, излишние денежные средства подлежат возврату.</span></div>
        <div style="position:absolute;left:85.11px;top:552.22px" class="cls_004"><span class="cls_004">Окончательный расчет по Заказу происходит в момент доставки Заказа.</span></div>
        <div style="position:absolute;left:67.10px;top:574.73px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:574.73px" class="cls_004"><span class="cls_004">Пользователь соглашается с тем, что все услуги предоставляются «как есть» и что</span></div>
        <div style="position:absolute;left:85.11px;top:587.50px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">не несет ответственность за качество поставляемых продуктов, за</span></div>
        <div style="position:absolute;left:85.11px;top:601.01px" class="cls_004"><span class="cls_004">задержки, сбои, неверную или несвоевременную доставку (осуществляемую</span></div>
        <div style="position:absolute;left:85.11px;top:614.52px" class="cls_004"><span class="cls_004">Партнерами </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">или третьими лицами), за сбои в работе платежных</span></div>
        <div style="position:absolute;left:85.11px;top:627.28px" class="cls_004"><span class="cls_004">систем, а также за невыполнение/ненадлежащее выполнение Партнерами</span></div>
        <div style="position:absolute;left:85.11px;top:640.79px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">пожеланий Пользователей, указанных в поле «Комментарий».</span></div>
        <div style="position:absolute;left:85.11px;top:654.30px" class="cls_004"><span class="cls_004">Информация о сроках доставки, предоставляемая Пользователю, носит</span></div>
        <div style="position:absolute;left:85.11px;top:667.06px" class="cls_004"><span class="cls_004">информационный характер и может не учитывать обстоятельства, не зависящие от</span></div>
        <div style="position:absolute;left:85.11px;top:680.57px" class="cls_004"><span class="cls_004">воли </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">, в том числе: задержки в связи с неблагоприятными</span></div>
        <div style="position:absolute;left:85.11px;top:693.33px" class="cls_004"><span class="cls_004">метеоусловиями, дорожными заторами и пр. Также Пользователь подтверждает свое</span></div>
        <div style="position:absolute;left:85.11px;top:706.85px" class="cls_004"><span class="cls_004">согласие с тем, что в период повышенного спроса (сезонного или вызванного</span></div>
        <div style="position:absolute;left:85.11px;top:720.36px" class="cls_004"><span class="cls_004">распространением массовых промокодов) сроки подтверждения заказа и его доставки</span></div>
        <div style="position:absolute;left:85.11px;top:733.12px" class="cls_004"><span class="cls_004">могут быть увеличены.</span></div>
        <div style="position:absolute;left:67.10px;top:755.64px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:755.64px" class="cls_004"><span class="cls_004">Оформление заказа и его доставки осуществляется Пользователем на условиях,</span></div>
        <div style="position:absolute;left:85.11px;top:769.15px" class="cls_004"><span class="cls_004">указанных на Сайте, и является подтверждением согласия Пользователя с</span></div>
        </div>
        <div style="position:absolute;left:50%;margin-left:-298px;top:1706px;width:596px;height:843px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
        <img src="26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_id_26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_files/background3.jpg" width=596 height=843></div>
        <div style="position:absolute;left:85.11px;top:56.05px" class="cls_004"><span class="cls_004">существенными условиями продажи готовых блюд питания и продуктов и их доставки.</span></div>
        <div style="position:absolute;left:85.11px;top:68.81px" class="cls_004"><span class="cls_004">В отношении отдельных категорий заказов стоимость доставки Заказов может быть</span></div>
        <div style="position:absolute;left:85.11px;top:82.32px" class="cls_004"><span class="cls_004">не установлена, Пользователь информируется об этом при оформлении заказа</span></div>
        <div style="position:absolute;left:85.11px;top:95.83px" class="cls_004"><span class="cls_004">(снижение/отсутствие стоимости доставки в зависимости от суммы заказа).</span></div>
        <div style="position:absolute;left:67.10px;top:117.60px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:85.11px;top:117.60px" class="cls_012"><span class="cls_012">Важно!</span><span class="cls_013"> </span><span class="cls_004">В случае, если в случае </span><span class="cls_012">своевременной</span><span class="cls_013"> </span><span class="cls_004">доставки Заказа Пользователь не</span></div>
        <div style="position:absolute;left:85.11px;top:131.11px" class="cls_004"><span class="cls_004">обеспечил свое присутствие для приема Заказа по указанному адресу доставки либо</span></div>
        <div style="position:absolute;left:85.11px;top:143.87px" class="cls_004"><span class="cls_004">отказался от принятия Заказа (по причинам, не связанным с</span></div>
        <div style="position:absolute;left:85.11px;top:157.38px" class="cls_004"><span class="cls_004">качеством/комплектностью Заказа), </span><span class="cls_006">VegFood.delivery </span><span class="cls_012">вправе удержать денежные</span></div>
        <div style="position:absolute;left:85.11px;top:170.90px" class="cls_012"><span class="cls_012">средства, полученные от Пользователя за Заказ, в связи с необходимостью</span></div>
        <div style="position:absolute;left:85.11px;top:183.66px" class="cls_012"><span class="cls_012">возмещения расходов Партнеров </span><span class="cls_006">VegFood.delivery </span><span class="cls_012">на приготовление блюд</span></div>
        <div style="position:absolute;left:85.11px;top:197.17px" class="cls_012"><span class="cls_012">питания (в отношении услуг доставки, осуществляемых третьими лицами, в</span></div>
        <div style="position:absolute;left:85.11px;top:210.68px" class="cls_012"><span class="cls_012">указанном случае </span><span class="cls_006">VegFood.delivery </span><span class="cls_012">также вправе удержать сумму в размере</span></div>
        <div style="position:absolute;left:85.11px;top:223.44px" class="cls_012"><span class="cls_012">стоимости доставки по поручению таких лиц).</span></div>
        <div style="position:absolute;left:67.10px;top:245.96px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:245.96px" class="cls_004"><span class="cls_004">Пользователь самостоятельно оформляет Заказ на Сайте либо путем обращения в</span></div>
        <div style="position:absolute;left:85.11px;top:258.72px" class="cls_004"><span class="cls_004">контакт-центр (если применимо).</span></div>
        <div style="position:absolute;left:67.10px;top:281.24px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:281.24px" class="cls_004"><span class="cls_004">Пользователь оплачивает заказ одним из следующих доступных способов:</span></div>
        <div style="position:absolute;left:67.10px;top:303.76px" class="cls_004"><span class="cls_004">1.</span></div>
        <div style="position:absolute;left:88.31px;top:303.76px" class="cls_004"><span class="cls_004">непосредственно при получении заказа наличными денежными средствами,</span></div>
        <div style="position:absolute;left:85.11px;top:316.52px" class="cls_004"><span class="cls_004">банковской картой или иными способами, предоставленными Партнером</span></div>
        <div style="position:absolute;left:85.11px;top:330.03px" class="cls_006"><span class="cls_006">VegFood.delivery</span><span class="cls_007"> </span><span class="cls_004"> (если применимо).</span></div>
        <div style="position:absolute;left:67.10px;top:352.55px" class="cls_004"><span class="cls_004">2.</span></div>
        <div style="position:absolute;left:88.31px;top:352.55px" class="cls_004"><span class="cls_004">on-line оплата на Сайте </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">банковской картой VISA/MasterCard через</span></div>
        <div style="position:absolute;left:85.11px;top:365.31px" class="cls_004"><span class="cls_004">платежную систему ______«___________». Все дополнительные расходы по</span></div>
        <div style="position:absolute;left:85.11px;top:378.82px" class="cls_004"><span class="cls_004">перечислению денежных средств за заказ несёт Пользователь.</span></div>
        <div style="position:absolute;left:67.10px;top:401.34px" class="cls_004"><span class="cls_004">3.</span></div>
        <div style="position:absolute;left:88.31px;top:401.34px" class="cls_004"><span class="cls_004">on-line оплата на Сайте </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">банковской картой VISA/MasterCard через</span></div>
        <div style="position:absolute;left:85.11px;top:414.10px" class="cls_004"><span class="cls_004">платежную систему ОАО «_______». Все дополнительные расходы по перечислению</span></div>
        <div style="position:absolute;left:85.11px;top:427.61px" class="cls_004"><span class="cls_004">денежных средств за заказ несёт Пользователь.</span></div>
        <div style="position:absolute;left:85.11px;top:449.38px" class="cls_004"><span class="cls_004">Пользователь имеет возможность привязать банковскую карту к своему Личному</span></div>
        <div style="position:absolute;left:85.11px;top:462.89px" class="cls_004"><span class="cls_004">кабинету. В дальнейшем сумма любого последующего Заказа Пользователя будет</span></div>
        <div style="position:absolute;left:85.11px;top:476.40px" class="cls_004"><span class="cls_004">списываться автоматически с прикрепленной к Личному кабинету банковской карты</span></div>
        <div style="position:absolute;left:85.11px;top:489.16px" class="cls_004"><span class="cls_004">без указания реквизитов, при подтверждении платежа с его стороны путем нажатия</span></div>
        <div style="position:absolute;left:85.11px;top:502.67px" class="cls_004"><span class="cls_004">кнопки «Оплатить» в корзине Личного кабинета и ввода одноразового пароля, в</span></div>
        <div style="position:absolute;left:85.11px;top:516.19px" class="cls_004"><span class="cls_004">случае, если банк-эмитент банковской карты клиента предусматривает</span></div>
        <div style="position:absolute;left:85.11px;top:528.95px" class="cls_004"><span class="cls_004">использование данной защиты.</span></div>
        <div style="position:absolute;left:67.10px;top:556.72px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:556.72px" class="cls_004"><span class="cls_004">В случае отказа Пользователя от Заказа, либо в случае нарушения Партнерами</span></div>
        <div style="position:absolute;left:85.11px;top:569.48px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">условий реализации продукции, в том числе, но не ограничиваясь: в</span></div>
        <div style="position:absolute;left:85.11px;top:582.99px" class="cls_004"><span class="cls_004">случае одностороннего отказа от реализации продукции, нарушения срока доставки</span></div>
        <div style="position:absolute;left:85.11px;top:595.75px" class="cls_004"><span class="cls_004">или несоответствия качества продукции и т.п., </span><span class="cls_012">Пользователь обязан в течение 24</span></div>
        <div style="position:absolute;left:85.11px;top:609.26px" class="cls_012"><span class="cls_012">часов с момента наступления времени доставки/получения Заказа сообщить</span></div>
        <div style="position:absolute;left:85.11px;top:622.78px" class="cls_006"><span class="cls_006">VegFood.delivery   </span><span class="cls_012">по e-mail адресу </span><span class="cls_019">_<A HREF="mailto:finance@delivery-club.ru">___________________</A> </span><span class="cls_013"> </span><span class="cls_012">о своём отказе от</span></div>
        <div style="position:absolute;left:85.11px;top:635.54px" class="cls_012"><span class="cls_012">Заказа, предоставить документы, подтверждающие оплату Заказа, и</span></div>
        <div style="position:absolute;left:85.11px;top:649.05px" class="cls_012"><span class="cls_012">потребовать вернуть уплаченные денежные средства.</span></div>
        <div style="position:absolute;left:85.11px;top:671.57px" class="cls_004"><span class="cls_004">Возврат денежных средств в течение 2 (двух) дней с момента оплаты Заказа</span></div>
        <div style="position:absolute;left:85.11px;top:684.33px" class="cls_004"><span class="cls_004">производится Delivery Club.</span></div>
        <div style="position:absolute;left:85.11px;top:706.85px" class="cls_012"><span class="cls_012">По истечении 2 (двух) дней с момента оплаты Заказа при неполучении</span></div>
        <div style="position:absolute;left:85.11px;top:719.61px" class="cls_006"><span class="cls_006">VegFood.delivery</span><span class="cls_007"> </span><span class="cls_012">уведомления от Пользователя об отказе от Заказа и возврате</span></div>
        <div style="position:absolute;left:85.11px;top:733.12px" class="cls_012"><span class="cls_012">денежных средств, Заказ считается выполненным, денежные средства за него</span></div>
        <div style="position:absolute;left:85.11px;top:746.63px" class="cls_012"><span class="cls_012">возврату не подлежат.</span></div>
        </div>
        <div style="position:absolute;left:50%;margin-left:-298px;top:2559px;width:596px;height:843px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
        <img src="26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_id_26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_files/background4.jpg" width=596 height=843></div>
        <div style="position:absolute;left:85.11px;top:56.05px" class="cls_004"><span class="cls_004">Возврат денежных средств, оплаченных Пользователем через платежную систему на</span></div>
        <div style="position:absolute;left:85.11px;top:68.81px" class="cls_004"><span class="cls_004">Сайте банковской картой, осуществляется только на ту карту, с которой была</span></div>
        <div style="position:absolute;left:85.11px;top:82.32px" class="cls_004"><span class="cls_004">произведена оплата, в соответствии с правилами международных платежных систем</span></div>
        <div style="position:absolute;left:85.11px;top:95.83px" class="cls_004"><span class="cls_004">и действующим законодательством РФ о национальной платежной системе.</span></div>
        <div style="position:absolute;left:67.10px;top:122.86px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:122.86px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">вправе отказать Пользователю в оформлении Заказа с формой</span></div>
        <div style="position:absolute;left:85.11px;top:135.62px" class="cls_004"><span class="cls_004">оплаты "наличными или картой курьеру", если ранее оформленные Заказы</span></div>
        <div style="position:absolute;left:85.11px;top:149.13px" class="cls_004"><span class="cls_004">Пользователя не были доставлены по его вине (например, если Пользователь не</span></div>
        <div style="position:absolute;left:85.11px;top:162.64px" class="cls_004"><span class="cls_004">открыл дверь или не ответил по телефону курьеру при доставке Заказа, или</span></div>
        <div style="position:absolute;left:85.11px;top:175.40px" class="cls_004"><span class="cls_004">Пользователь указал несуществующий адрес доставки и т.п.).</span></div>
        <div style="position:absolute;left:67.10px;top:197.92px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:197.92px" class="cls_004"><span class="cls_004">Авторизация операций по банковским картам осуществляется банком. Если у банка</span></div>
        <div style="position:absolute;left:85.11px;top:211.43px" class="cls_004"><span class="cls_004">есть основания полагать, что операция носит мошеннический характер, то банк</span></div>
        <div style="position:absolute;left:85.11px;top:224.19px" class="cls_004"><span class="cls_004">вправе отказать в осуществлении данной операции. Мошеннические операции с</span></div>
        <div style="position:absolute;left:85.11px;top:237.70px" class="cls_004"><span class="cls_004">банковскими картами являются уголовным преступлением.</span></div>
        <div style="position:absolute;left:67.10px;top:260.22px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:260.22px" class="cls_004"><span class="cls_004">Во избежание случаев мошенничества при оплате банковскими картами платежи,</span></div>
        <div style="position:absolute;left:85.11px;top:272.98px" class="cls_004"><span class="cls_004">оплаченные банковской картой, могут проверяться </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">в рамках</span></div>
        <div style="position:absolute;left:85.11px;top:286.49px" class="cls_004"><span class="cls_004">имеющихся возможностей. Пользователь, оформивший такой платеж, обязан по</span></div>
        <div style="position:absolute;left:85.11px;top:299.25px" class="cls_004"><span class="cls_004">запросу, поступившему от </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">, предоставить копию необходимых</span></div>
        <div style="position:absolute;left:85.11px;top:312.76px" class="cls_004"><span class="cls_004">документов для подтверждения правомерного использования банковской карты.</span></div>
        <div style="position:absolute;left:67.10px;top:335.28px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:335.28px" class="cls_004"><span class="cls_004">Пользователь вправе иметь только один профиль в системе сервиса</span></div>
        <div style="position:absolute;left:85.11px;top:348.04px" class="cls_006"><span class="cls_006">VegFood.delivery</span><span class="cls_007"> </span><span class="cls_004">(«запрет создания множества профилей»). Создание нескольких</span></div>
        <div style="position:absolute;left:85.11px;top:361.56px" class="cls_004"><span class="cls_004">профилей для получения выгоды путем введения в заблуждение является</span></div>
        <div style="position:absolute;left:85.11px;top:375.07px" class="cls_004"><span class="cls_004">нарушением настоящих Правил и может привести к немедленной блокировке всех</span></div>
        <div style="position:absolute;left:85.11px;top:387.83px" class="cls_004"><span class="cls_004">профилей Пользователя, а также к невозможности применения всех</span></div>
        <div style="position:absolute;left:85.11px;top:401.34px" class="cls_004"><span class="cls_004">указанных/использованных номеров телефонов/электронных адресов/банковских карт</span></div>
        <div style="position:absolute;left:85.11px;top:414.10px" class="cls_004"><span class="cls_004">такого Пользователя в системе сервиса </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">в дальнейшем.</span></div>
        <div style="position:absolute;left:67.10px;top:499.92px" class="cls_011"><span class="cls_011">3.  Обязательства по использованию сервиса</span></div>
        <div style="position:absolute;left:67.10px;top:519.19px" class="cls_004"><span class="cls_004">●   Пользователь соглашается предоставить достоверную, полную и актуальную</span></div>
        <div style="position:absolute;left:85.11px;top:532.70px" class="cls_004"><span class="cls_004">информацию по вопросам, предлагаемым в форме заказа и/или форме регистрации.</span></div>
        <div style="position:absolute;left:67.10px;top:554.47px" class="cls_004"><span class="cls_004">●   Если Пользователь предоставляет неверную/некорректную информацию или у</span></div>
        <div style="position:absolute;left:85.11px;top:567.98px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">есть серьезные основания полагать, что предоставленная им</span></div>
        <div style="position:absolute;left:85.11px;top:581.49px" class="cls_004"><span class="cls_004">информация неверна, неполна или неточна, </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">имеет право</span></div>
        <div style="position:absolute;left:85.11px;top:594.25px" class="cls_004"><span class="cls_004">приостановить либо отменить регистрацию пользователя и отказать ему в</span></div>
        <div style="position:absolute;left:85.11px;top:607.76px" class="cls_004"><span class="cls_004">использовании сервиса.</span></div>
        <div style="position:absolute;left:67.10px;top:629.53px" class="cls_004"><span class="cls_004">●   </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">оставляет за собой право отказать Пользователю в применении</span></div>
        <div style="position:absolute;left:85.11px;top:643.04px" class="cls_004"><span class="cls_004">сервиса </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">без уведомления Пользователя и/или без объяснения</span></div>
        <div style="position:absolute;left:85.11px;top:656.55px" class="cls_004"><span class="cls_004">причин.</span></div>
        <div style="position:absolute;left:67.10px;top:687.58px" class="cls_011"><span class="cls_011">4.  Регистрация Пользователя</span></div>
        <div style="position:absolute;left:67.10px;top:706.85px" class="cls_004"><span class="cls_004">●   Пользователь соглашается пройти процедуру регистрации на Сайте, заполнив</span></div>
        <div style="position:absolute;left:85.11px;top:719.61px" class="cls_004"><span class="cls_004">форму регистрации или воспользовавшись возможностью передачи данных</span></div>
        <div style="position:absolute;left:85.11px;top:733.12px" class="cls_004"><span class="cls_004">Пользователя от сервиса третьего лица в сервис </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">и выразив</span></div>
        <div style="position:absolute;left:85.11px;top:746.63px" class="cls_004"><span class="cls_004">согласие с условиями Соглашения путем подтверждения пункта «Я принимаю</span></div>
        <div style="position:absolute;left:85.11px;top:759.39px" class="cls_004"><span class="cls_004">условия Соглашения».</span></div>
        </div>
        <div style="position:absolute;left:50%;margin-left:-298px;top:3412px;width:596px;height:843px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
        <img src="26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_id_26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_files/background5.jpg" width=596 height=843></div>
        <div style="position:absolute;left:67.10px;top:56.05px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:56.05px" class="cls_004"><span class="cls_004">Пользователь несет ответственность за безопасность своей учетной записи в</span></div>
        <div style="position:absolute;left:85.11px;top:68.81px" class="cls_006"><span class="cls_006">VegFood.delivery</span><span class="cls_004">, а также за все, что будет сделано на Сайте </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">с</span></div>
        <div style="position:absolute;left:85.11px;top:82.32px" class="cls_004"><span class="cls_004">использованием его учетной записи.</span></div>
        <div style="position:absolute;left:67.10px;top:104.84px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:104.84px" class="cls_004"><span class="cls_004">Пользователь соглашается с тем, что он обязан немедленно уведомить</span></div>
        <div style="position:absolute;left:85.11px;top:117.60px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">о любом случае неавторизованного (не разрешенного) доступа под</span></div>
        <div style="position:absolute;left:85.11px;top:131.11px" class="cls_004"><span class="cls_004">своей учетной записью и/или о любом нарушении безопасности.</span></div>
        <div style="position:absolute;left:67.10px;top:162.14px" class="cls_011"><span class="cls_011">5.  Условия использования материалов, размещенных на</span></div>
        <div style="position:absolute;left:85.11px;top:176.40px" class="cls_006"><span class="cls_006">VegFood.delivery</span></div>
        <div style="position:absolute;left:67.10px;top:194.17px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:194.17px" class="cls_004"><span class="cls_004">Сайт содержит материалы, охраняемые авторским правом, товарные знаки и иные</span></div>
        <div style="position:absolute;left:85.11px;top:206.93px" class="cls_004"><span class="cls_004">охраняемые законом материалы, включая, но не ограничиваясь: тексты, фотографии,</span></div>
        <div style="position:absolute;left:85.11px;top:220.44px" class="cls_004"><span class="cls_004">графические изображения.</span></div>
        <div style="position:absolute;left:67.10px;top:242.21px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:242.21px" class="cls_004"><span class="cls_004">При этом все содержание Сайта охраняется авторским правом как произведение,</span></div>
        <div style="position:absolute;left:85.11px;top:255.72px" class="cls_004"><span class="cls_004">созданное коллективным творческим трудом в соответствии с законодательством</span></div>
        <div style="position:absolute;left:85.11px;top:269.23px" class="cls_004"><span class="cls_004">Российской Федерации об авторском праве и смежных правах.</span></div>
        <div style="position:absolute;left:67.10px;top:291.00px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:291.00px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">принадлежит авторское право на использование содержания Сайта</span></div>
        <div style="position:absolute;left:85.11px;top:304.51px" class="cls_004"><span class="cls_004">(в том числе, право на подбор, расположение, систематизацию и преобразование</span></div>
        <div style="position:absolute;left:85.11px;top:318.02px" class="cls_004"><span class="cls_004">данных, содержащихся на сайте </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">, а также на сами исходные</span></div>
        <div style="position:absolute;left:85.11px;top:330.78px" class="cls_004"><span class="cls_004">данные), кроме случаев, отдельно отмеченных в содержании опубликованных на</span></div>
        <div style="position:absolute;left:85.11px;top:344.29px" class="cls_004"><span class="cls_004">сайте материалов.</span></div>
        <div style="position:absolute;left:67.10px;top:366.81px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:366.81px" class="cls_004"><span class="cls_004">Пользователь не имеет права вносить изменения, публиковать, передавать третьим</span></div>
        <div style="position:absolute;left:85.11px;top:379.57px" class="cls_004"><span class="cls_004">лицам, участвовать в продаже или уступке, создавать производные продукты или</span></div>
        <div style="position:absolute;left:85.11px;top:393.08px" class="cls_004"><span class="cls_004">иным образом использовать, частично или полностью, содержание Сайта.</span></div>
        <div style="position:absolute;left:67.10px;top:414.85px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:414.85px" class="cls_004"><span class="cls_004">Пользователь Сети обязуется использовать Сайт только в законных целях.</span></div>
        <div style="position:absolute;left:67.10px;top:437.37px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:437.37px" class="cls_004"><span class="cls_004">Пользователь Сети обязуется не размещать на Сайте и не направлять куда-либо</span></div>
        <div style="position:absolute;left:85.11px;top:450.88px" class="cls_004"><span class="cls_004">через/посредством Сайта любые материалы следующего характера:</span></div>
        <div style="position:absolute;left:67.10px;top:479.40px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:477.90px" class="cls_004"><span class="cls_004">нарушающие законодательство, содержащие угрозы и оскорбления,</span></div>
        <div style="position:absolute;left:85.11px;top:491.41px" class="cls_004"><span class="cls_004">дискредитирующие других лиц, нарушающие права граждан на частную жизнь или</span></div>
        <div style="position:absolute;left:85.11px;top:504.18px" class="cls_004"><span class="cls_004">публичный порядок, носящие характер непристойности;</span></div>
        <div style="position:absolute;left:67.10px;top:528.20px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:526.69px" class="cls_004"><span class="cls_004">нарушающие в той или иной степени честь и достоинство, права и охраняемые</span></div>
        <div style="position:absolute;left:85.11px;top:540.21px" class="cls_004"><span class="cls_004">законом интересы других лиц;</span></div>
        <div style="position:absolute;left:67.10px;top:563.48px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:561.97px" class="cls_004"><span class="cls_004">способствующие или содержащие призывы к разжиганию религиозной, расовой или</span></div>
        <div style="position:absolute;left:85.11px;top:575.49px" class="cls_004"><span class="cls_004">межнациональной розни, содержащие попытки разжигания вражды или призывы к</span></div>
        <div style="position:absolute;left:85.11px;top:588.25px" class="cls_004"><span class="cls_004">насилию;</span></div>
        <div style="position:absolute;left:67.10px;top:612.27px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:610.77px" class="cls_004"><span class="cls_004">а также иные материалы, которые побуждают других лиц на противоправное</span></div>
        <div style="position:absolute;left:85.11px;top:624.28px" class="cls_004"><span class="cls_004">поведение, влекущее уголовную, гражданско-правовую и иную ответственность или</span></div>
        <div style="position:absolute;left:85.11px;top:637.04px" class="cls_004"><span class="cls_004">каким-либо образом нарушающее положения законодательства.</span></div>
        <div style="position:absolute;left:67.10px;top:659.56px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:659.56px" class="cls_004"><span class="cls_004">Пользователь обязуется не размещать на Сайте и не направлять через/посредством</span></div>
        <div style="position:absolute;left:85.11px;top:673.07px" class="cls_004"><span class="cls_004">Сайта материалы, являющиеся рекламой каких-либо товаров или услуг, без</span></div>
        <div style="position:absolute;left:85.11px;top:685.83px" class="cls_004"><span class="cls_004">получения предварительного явно выраженного согласия </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">.</span></div>
        <div style="position:absolute;left:67.10px;top:708.35px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:708.35px" class="cls_004"><span class="cls_004">Пользователь обязуется не использовать Сайт для рекламы или иного</span></div>
        <div style="position:absolute;left:85.11px;top:721.11px" class="cls_004"><span class="cls_004">стимулирования сбыта любых товаров и услуг в любой форме, включая, но не</span></div>
        <div style="position:absolute;left:85.11px;top:734.62px" class="cls_004"><span class="cls_004">ограничиваясь, стимулирование пользователей к подписке на другую систему</span></div>
        <div style="position:absolute;left:85.11px;top:748.13px" class="cls_004"><span class="cls_004">интерактивного обслуживания, являющуюся конкурентом </span><span class="cls_006">VegFood.delivery</span><span class="cls_004">.</span></div>
        </div>
        <div style="position:absolute;left:50%;margin-left:-298px;top:4265px;width:596px;height:843px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
        <img src="26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_id_26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_files/background6.jpg" width=596 height=843></div>
        <div style="position:absolute;left:67.10px;top:56.05px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:56.05px" class="cls_004"><span class="cls_004">Пользователь обязуется не загружать, размещать или иным образом использовать</span></div>
        <div style="position:absolute;left:85.11px;top:68.81px" class="cls_004"><span class="cls_004">на Сайте какие-либо материалы, охраняемые законодательством об</span></div>
        <div style="position:absolute;left:85.11px;top:82.32px" class="cls_004"><span class="cls_004">интеллектуальной собственности (в том числе, авторским правом, законодательством</span></div>
        <div style="position:absolute;left:85.11px;top:95.83px" class="cls_004"><span class="cls_004">о товарных знаках), и иные охраняемые законодательством материалы без</span></div>
        <div style="position:absolute;left:85.11px;top:108.59px" class="cls_004"><span class="cls_004">получения выраженного разрешения обладателя прав на охраняемый материал. При</span></div>
        <div style="position:absolute;left:85.11px;top:122.10px" class="cls_004"><span class="cls_004">этом бремя доказывания того, что размещение на Сайте пользователем материалов</span></div>
        <div style="position:absolute;left:85.11px;top:134.87px" class="cls_004"><span class="cls_004">не нарушает авторские, смежные и иные права третьих лиц на размещаемые</span></div>
        <div style="position:absolute;left:85.11px;top:148.38px" class="cls_004"><span class="cls_004">материалы, а также ответственность незаконное размещение лежит на</span></div>
        <div style="position:absolute;left:85.11px;top:161.89px" class="cls_004"><span class="cls_004">Пользователе.</span></div>
        <div style="position:absolute;left:67.10px;top:183.66px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:183.66px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">не несет ответственность за отзывы, опубликованные</span></div>
        <div style="position:absolute;left:85.11px;top:197.17px" class="cls_004"><span class="cls_004">Пользователем.</span></div>
        <div style="position:absolute;left:67.10px;top:219.69px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:219.69px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">оставляет за собой право размещать комментарии к отзыву</span></div>
        <div style="position:absolute;left:85.11px;top:232.45px" class="cls_004"><span class="cls_004">Пользователя. </span><span class="cls_006">VegFood.delivery </span><span class="cls_007"> </span><span class="cls_004">оставляет за собой право не размещать и удалять</span></div>
        <div style="position:absolute;left:85.11px;top:245.96px" class="cls_004"><span class="cls_004">отзывы Пользователя, нарушающие российское законодательство и наносящие</span></div>
        <div style="position:absolute;left:85.11px;top:258.72px" class="cls_004"><span class="cls_004">ущерб законным интересам третьих лиц (в том числе, носящие оскорбительный</span></div>
        <div style="position:absolute;left:85.11px;top:272.23px" class="cls_004"><span class="cls_004">характер либо порочащие честь, достоинство и репутацию таких лиц).</span></div>
        <div style="position:absolute;left:67.10px;top:303.25px" class="cls_011"><span class="cls_011">2.  Ответственность</span></div>
        <div style="position:absolute;left:67.10px;top:322.52px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:322.52px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">не несет ответственности за соблюдение/несоблюдение лицами,</span></div>
        <div style="position:absolute;left:85.11px;top:336.03px" class="cls_004"><span class="cls_004">осуществляющими доставку Заказа, своих обязательств перед Пользователем, а</span></div>
        <div style="position:absolute;left:85.11px;top:348.79px" class="cls_004"><span class="cls_004">также за достоверность информации, предоставленной такими службами.</span></div>
        <div style="position:absolute;left:67.10px;top:371.31px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:371.31px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">является информационным связующим звеном между</span></div>
        <div style="position:absolute;left:85.11px;top:384.83px" class="cls_004"><span class="cls_004">Пользователем и лицами, осуществляющими доставку Заказа, при этом</span></div>
        <div style="position:absolute;left:85.11px;top:397.59px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">вправе принимать вопросы/претензии от Пользователей</span></div>
        <div style="position:absolute;left:85.11px;top:411.10px" class="cls_004"><span class="cls_004">относительно доставки Заказа в течение 24 (двадцать четыре) часов с момента</span></div>
        <div style="position:absolute;left:85.11px;top:423.86px" class="cls_004"><span class="cls_004">доставки/ожидаемой доставки, при </span><span class="cls_012">этом во избежание мошенничества</span></div>
        <div style="position:absolute;left:85.11px;top:437.37px" class="cls_012"><span class="cls_012">Пользователь обязуется предоставить материалы с фото-/видеофиксацией</span></div>
        <div style="position:absolute;left:85.11px;top:450.88px" class="cls_012"><span class="cls_012">повреждений заказа либо иных нарушений качества/комплектности</span><span class="cls_004">.</span></div>
        <div style="position:absolute;left:67.10px;top:481.90px" class="cls_011"><span class="cls_011">3.  Права собственности </span><span class="cls_006">VegFood.delivery</span></div>
        <div style="position:absolute;left:67.10px;top:501.17px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:501.17px" class="cls_004"><span class="cls_004">Пользователь признает и соглашается с тем, что сервис </span><span class="cls_006">VegFood.delivery </span><span class="cls_004">и все</span></div>
        <div style="position:absolute;left:85.11px;top:513.93px" class="cls_004"><span class="cls_004">необходимые программы, связанные с ним, содержат конфиденциальную</span></div>
        <div style="position:absolute;left:85.11px;top:527.44px" class="cls_004"><span class="cls_004">информацию, которая защищена законами об интеллектуальной собственности и</span></div>
        <div style="position:absolute;left:85.11px;top:540.96px" class="cls_004"><span class="cls_004">прочими российскими и международными законами. Пользователь соглашается не</span></div>
        <div style="position:absolute;left:85.11px;top:553.72px" class="cls_004"><span class="cls_004">модифицировать, не продавать, не распространять этот контент и программы,</span></div>
        <div style="position:absolute;left:85.11px;top:567.23px" class="cls_004"><span class="cls_004">целиком либо по частям.</span></div>
        <div style="position:absolute;left:67.10px;top:598.25px" class="cls_011"><span class="cls_011">4.  Конфиденциальность</span></div>
        <div style="position:absolute;left:67.10px;top:617.52px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:617.52px" class="cls_004"><span class="cls_004">Персональные данные Пользователя обрабатываются в соответствии с ФЗ «О</span></div>
        <div style="position:absolute;left:85.11px;top:630.28px" class="cls_004"><span class="cls_004">персональных данных» №152-ФЗ</span></div>
        <div style="position:absolute;left:67.10px;top:652.80px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:652.80px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">имеет право отправлять Пользователю от своего имени</span></div>
        <div style="position:absolute;left:85.11px;top:666.31px" class="cls_004"><span class="cls_004">самостоятельно или с привлечением технических партнеров информационные, в том</span></div>
        <div style="position:absolute;left:85.11px;top:679.07px" class="cls_004"><span class="cls_004">числе сервисные и рекламные сообщения, на электронную почту Пользователя,</span></div>
        <div style="position:absolute;left:85.11px;top:692.58px" class="cls_004"><span class="cls_004">мобильный телефон (смс, телефонные звонки) или через используемые им сервисы</span></div>
        <div style="position:absolute;left:85.11px;top:706.09px" class="cls_004"><span class="cls_004">партнеров </span><span class="cls_006">VegFood.delivery</span><span class="cls_007"> </span><span class="cls_004"> (социальные сети, мессенджеры и иные). Сервисные</span></div>
        <div style="position:absolute;left:85.11px;top:718.86px" class="cls_004"><span class="cls_004">сообщения, информирующие Пользователя о заказе и этапах его обработки,</span></div>
        <div style="position:absolute;left:85.11px;top:732.37px" class="cls_004"><span class="cls_004">отправляются автоматически и не могут быть отклонены Пользователем.</span></div>
        </div>
        <div style="position:absolute;left:50%;margin-left:-298px;top:5118px;width:596px;height:843px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
        <img src="26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_id_26dc7a5e-89c6-11eb-8b25-0cc47a792c0a_files/background7.jpg" width=596 height=843></div>
        <div style="position:absolute;left:85.11px;top:56.05px" class="cls_004"><span class="cls_004">Пользователь вправе отказаться от получения рекламных сообщений после создания</span></div>
        <div style="position:absolute;left:85.11px;top:68.81px" class="cls_004"><span class="cls_004">аккаунта Пользователя на Сайте путем редактирования аккаунта Пользователя (на</span></div>
        <div style="position:absolute;left:85.11px;top:82.32px" class="cls_004"><span class="cls_004">сайте в разделе «Профиль» </span><span class="cls_018">_<A HREF="https://www.delivery-club.ru/profile">_________________</A> </span><span class="cls_010"> </span><span class="cls_004">либо мобильном приложении в</span></div>
        <div style="position:absolute;left:85.11px;top:95.83px" class="cls_004"><span class="cls_004">разделе «Настройки») либо путем обращения Пользователя в контакт-центр или в</span></div>
        <div style="position:absolute;left:85.11px;top:108.59px" class="cls_004"><span class="cls_004">отдел поддержки клиентов ______________________</span></div>
        <div style="position:absolute;left:67.10px;top:135.62px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:135.62px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">вправе для целей оптимизации (совершенствования)</span></div>
        <div style="position:absolute;left:85.11px;top:149.13px" class="cls_004"><span class="cls_004">функциональных возможностей сервиса, в том числе для контроля качества и</span></div>
        <div style="position:absolute;left:85.11px;top:162.64px" class="cls_004"><span class="cls_004">совершенствования обслуживания (в том числе с привлечением третьих лиц):</span></div>
        <div style="position:absolute;left:67.10px;top:176.90px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:175.40px" class="cls_004"><span class="cls_004">осуществлять запись разговоров Пользователя со специалистами Службы</span></div>
        <div style="position:absolute;left:85.11px;top:188.91px" class="cls_004"><span class="cls_004">Поддержки;</span></div>
        <div style="position:absolute;left:67.10px;top:212.93px" class="cls_008"><span class="cls_008">●</span></div>
        <div style="position:absolute;left:85.11px;top:211.43px" class="cls_004"><span class="cls_004">использовать полученную запись разговоров в указанных в настоящем пункте целях".</span></div>
        <div style="position:absolute;left:67.10px;top:242.45px" class="cls_011"><span class="cls_011">5.  Общие положения</span></div>
        <div style="position:absolute;left:67.10px;top:261.72px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:261.72px" class="cls_004"><span class="cls_004">Настоящее Соглашение регулируется нормами действующего законодательства РФ.</span></div>
        <div style="position:absolute;left:67.10px;top:283.49px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:283.49px" class="cls_004"><span class="cls_004">Все возможные споры по поводу Соглашения разрешаются согласно нормам</span></div>
        <div style="position:absolute;left:85.11px;top:297.00px" class="cls_004"><span class="cls_004">действующего законодательства РФ.</span></div>
        <div style="position:absolute;left:67.10px;top:318.77px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:318.77px" class="cls_004"><span class="cls_004">Ввиду безвозмездности условий настоящего соглашения нормы о защите прав</span></div>
        <div style="position:absolute;left:85.11px;top:332.28px" class="cls_004"><span class="cls_004">потребителей не могут быть применимы к отношениям между Пользователем и</span></div>
        <div style="position:absolute;left:85.11px;top:345.79px" class="cls_006"><span class="cls_006">VegFood.delivery</span></div>
        <div style="position:absolute;left:67.10px;top:367.56px" class="cls_004"><span class="cls_004">●</span></div>
        <div style="position:absolute;left:88.31px;top:367.56px" class="cls_004"><span class="cls_004">Ничто в Соглашении не может пониматься как установление между Пользователем и</span></div>
        <div style="position:absolute;left:85.11px;top:380.32px" class="cls_006"><span class="cls_006">VegFood.delivery </span><span class="cls_004">агентских отношений, отношений товарищества, отношений по</span></div>
        <div style="position:absolute;left:85.11px;top:393.83px" class="cls_004"><span class="cls_004">совместной деятельности, отношений личного найма, либо каких-то иных отношений,</span></div>
        <div style="position:absolute;left:85.11px;top:406.59px" class="cls_004"><span class="cls_004">прямо не предусмотренных настоящим Соглашением.</span></div>
        </div>
        ';
        // return '
        //     <iframe src="/static/policy.pdf" width="100%" style="height:100%"></iframe>
        // ';
    }
}