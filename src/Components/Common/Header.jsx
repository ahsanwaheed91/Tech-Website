import React , { useState } from 'react'
import { Anchor, Button, Drawer } from 'antd';




const HeaderApp = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="container-fluid">
        <div className="header">
       <div className="logo">
        <i class='fas fa-bolt'></i>
        <a href="https://github.com/ahsanwaheed91/dashboard">Tech</a>
       </div>
       <div className="mobileHidden">

          <Anchor targetOffset='65'
        items={[
          {
            key: 'part-1',
            href: '#Hero',
            title: 'Home',
          },
          {
            key: 'part-2',
            href: '#About',
            title: 'About',
          },
          {
            key: 'part-3',
            href: '#Feature',
            title: 'Feature',
          },
          {
            key: 'part-4',
            href: '#Faq',
            title: 'FAQ',
          },
          {
            key: 'part-5',
            href: '#Pricing',
            title: 'Pricing',
          },
          {
            key: 'part-6',
            href: '#Contact',
            title: 'Contact',
          },
        ]}
        />
        </div>
        <div className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
        <i className="fas fa-bars"></i>
      </Button>
      <Drawer  onClose={onClose} open={open}>
      <Anchor targetOffset='65'
        items={[
          {
            key: 'part-1',
            href: '#Hero',
            title: 'Home',
          },
          {
            key: 'part-2',
            href: '#About',
            title: 'About',
          },
          {
            key: 'part-3',
            href: '#Feature',
            title: 'Feature',
          },
          {
            key: 'part-4',
            href: '#Faq',
            title: 'FAQ',
          },
          {
            key: 'part-5',
            href: '#Pricing',
            title: 'Pricing',
          },
          {
            key: 'part-6',
            href: '#Contact',
            title: 'Contact',
          },
        ]}
        />
      </Drawer>
        </div>
        </div>
    </div>
  )
}

export default HeaderApp