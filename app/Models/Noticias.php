<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Noticias.
 *
 * @package namespace App\Models;
 */
class Noticias extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * Conexão database website
     */
//    protected $connection = 'sqlsrv-website';
//    protected $table = 'tb_sinpro_noticias';

    /**
     * Conexão teste Postgre
     */
    protected $connection = 'pgsql';
    protected $table = 'tb_sinpro_noticias';

    /**
     * configura primary key
     *
     * @var string
     */
    protected $primaryKey = 'id_noticia';

    /**
     * configura CREATED_AT
     */
    const CREATED_AT = 'dt_cadastro';

    const UPDATED_AT = 'dt_alteracao';

    protected $hidden = ['created_at', 'updated_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_noticia',
        'id_categoria',
        'dt_cadastro',
        'dt_expira',
        'dt_noticia',
        'fl_exibir_destaque',
        'ds_resumo',
        'ds_texto',
        'ds_palavra_chave',
        'fl_oculta'
    ];

    /**
     * Dates
     *
     * @var array
     */
    protected $dates = ['dt_noticia'];


    public function toArray()
    {
        $data = parent::toArray();
//        $data['dt_cadastro'] = (new \DateTime($this->dt_cadastro))->format('m-d-Y');
        $data['dt_noticia'] = (new \DateTime($this->dt_noticia))->format('m-d-Y');
        return $data;
    }

}
