import React from 'react'
import jema from '../icons/jema.png'
import learning from '../icons/learning.png'
import capital from '../icons/capital.png'
import jemgro from '../icons/jemgro.png'
import jemines from '../icons/jemines.png'
import cwasmin from '../icons/cwasmin.png'
export const Group = () => {

    return (
        <div className='group-container'>
            <div className='group-wrap'>
                <div className='group-header'>Our Group</div>
                <div className='group-list'>
                    <div className='group-list-item'>
                        <div className='group-list-wrap'  onClick={() => { window.open("https://www.jemaenergy.co/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={jema} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>JEMA ENERGY</div>
                            <div className='group-list-item-desc'>ugiueg ijoeiwjoiwjo pojwppw ff f ffijoifh2oihoi2oioi ih2oho2ioif2iopo io2ihoih oih2oih</div>
                        </div>
                    </div>

                    <div className='group-list-item'>
                        <div className='group-list-wrap' onClick={() => { window.open("https://www.ekamlearning.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={learning} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>EKAM LEARNING</div>
                            <div className='group-list-item-desc'>ugiueg ijoeiwjoiwjo pojwppw ff f ffijoifh2oihoi2oioi ih2oho2ioif2iopo io2ihoih oih2oih</div>
                        </div>
                    </div>

                    <div className='group-list-item' onClick={() => { window.open("https://www.ekamcapitalltd.com/", "_blank"); }}>
                        <div className='group-list-wrap'>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={capital} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>EKAM CAPITAL</div>
                            <div className='group-list-item-desc'>ugiueg ijoeiwjoiwjo pojwppw ff f ffijoifh2oihoi2oioi ih2oho2ioif2iopo io2ihoih oih2oih</div>
                        </div>
                    </div>
                </div>

                <div className='group-list-1'>
                    <div className='group-list-item'>
                        <div className='group-list-wrap' onClick={() => { window.open("https://www.jemgro.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={jemgro} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>JEMGRO</div>
                            <div className='group-list-item-desc'>ugiueg ijoeiwjoiwjo pojwppw ff f ffijoifh2oihoi2oioi ih2oho2ioif2iopo io2ihoih oih2oih</div>
                        </div>
                    </div>
                    <div className='group-list-item'>
                        <div className='group-list-wrap'  onClick={() => { window.open("https://www.jeminesresourcesltd.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={jemines} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>Je'mines resources</div>
                            <div className='group-list-item-desc'>ugiueg ijoeiwjoiwjo pojwppw ff f ffijoifh2oihoi2oioi ih2oho2ioif2iopo io2ihoih oih2oih</div>
                        </div>
                    </div>

                    <div className='group-list-item'>
                        <div className='group-list-wrap' onClick={() => { window.open("https://www.cwasminrealtyandconstruction.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={cwasmin} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>CWASMIN</div>
                            <div className='group-list-item-desc'>ugiueg ijoeiwjoiwjo pojwppw ff f ffijoifh2oihoi2oioi ih2oho2ioif2iopo io2ihoih oih2oih</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
