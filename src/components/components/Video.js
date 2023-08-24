import React from 'react'

export const Video = () => {
  return (
 <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content rounded-0">
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div>
                <div className="ratio ratio-16x9">
                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
