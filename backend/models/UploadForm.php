<?php
namespace backend\models;

use yii\base\Model;
use yii\web\UploadedFile;

class UploadForm extends Model
{
    /**
     * @var UploadedFile[]
     */
    public $imageFiles;

    public function rules()
    {
        return [
            [['imageFiles'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg', 'maxFiles' => 4],
        ];
    }
    
    public function upload($modelName = '')
    {
        if ($this->validate()) { 
            foreach ($this->imageFiles as $file) {
                $file->saveAs('uploads/' . $modelName .'_'.$file->baseName . '.' . $file->extension);
            }
            return true;
        } else {
            return false;
        }
    }

    public function getUploadName($modelName = '', $fileName)
    {
        return 'uploads/' . $modelName .'_'.$fileName;
    }
}
?>