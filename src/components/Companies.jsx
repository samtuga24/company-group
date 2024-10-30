import React from 'react'
import jema from '../icons/jema.png'
import learning from '../icons/learning.png'
import capital from '../icons/capital.png'
import jemgro from '../icons/jemgro.png'
import jemines from '../icons/jemines.png'
import cwasmin from '../icons/cwasmin.png'
import cwas from '../images/cwas.jpg'
export const Companies = () => {
    return (
        <div className='group-container'>
            <div className='group-wrap'>
                <div className='group-header'>Our Group</div>
                <div className='group-list'>
                    <div className='group-list-item'>
                        <div className='g-list-inner'>
                            <div className='group-list-back'>
                                <img src={cwas} alt="" />
                            </div>

                            <div className='group-list-wrap'>
                                <div className='group-list-item-icon-wrap'>
                                    <div className='group-list-icon'><img src={jema} alt="" /></div>
                                </div>
                                <div className='group-list-item-header'>JEMA ENERGY</div>
                                <div className='group-list-item-desc'>From responsible exploration to efficient distribution, JEMA Energy ensures quality, sustainable oil and gas solutions through expert consulting and advanced practices.</div>
                                <div className='visit'>
                                    <div className='visit-btn' onClick={() => { window.open("https://www.jemaenergy.co/", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
