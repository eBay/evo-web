import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{i as r,n as i,t as a}from"./ebay-flag-cZibZ428.js";var o;function s(){return(s=e((()=>{o=`ac.ad.ae.af.ag.ai.al.am.ao.aq.ar.as.at.au.aw.ax.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bl.bm.bn.bo.bq.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cefta.cf.cg.ch.ci.ck.cl.cm.cn.co.cp.cr.cu.cv.cw.cx.cy.cz.de.dg.dj.dk.dm.do.dz.ea.ec.ee.eg.eh.er.es.esCt.esGa.esPv.et.eu.fi.fj.fk.fm.fo.fr.ga.gb.gbEng.gbNir.gbSct.gbWls.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.ic.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.me.mf.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.ni.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.py.qa.re.ro.rs.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.ss.st.sv.sx.sy.sz.ta.tc.td.tf.tg.th.tj.tk.tl.tm.tn.to.tr.tt.tv.tw.tz.ua.ug.um.un.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.xk.xx.ye.yt.za.zm.zw`.split(`.`)})))()}var c,l,u,d,f;function p(){return(p=e((()=>{t(),a(),s(),c=n(),l={component:r,title:`graphics & icons/ebay-flag`,tags:[`autodocs`],parameters:{docs:{description:{component:`The component will include the actual SVG markup in the HTML and then reference the chosen flag.

## Usage

\`\`\`jsx
import { EbayFlag } from "@ebay/ui-core-react/ebay-flag";
import "@ebay/skin/icon";
import "@ebay/skin/flag";

<EbayFlag name="us" />;
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/flag";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/flag.css";
@import "@ebay/skin/icon.css";
\`\`\`
### Notes

Make sure you use \`<EbayFlagsSvg />\` in your code (ideally on server side only), so that actual SVG icons exist inside HTML.`}}},argTypes:{name:{description:`name of the flags from [Skin](./types.ts)`,control:`text`},a11yText:{description:`text for non-decorative inline flag; flag is assumed to be decorative if this is not passed`,control:`text`}}},u=e=>(0,c.jsx)(`table`,{children:(0,c.jsx)(`tbody`,{children:o.map((t,n)=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:t}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r,{...e,name:t})},t)]},n))})}),d=e=>(0,c.jsx)(`table`,{children:(0,c.jsx)(`tbody`,{children:o.map((t,n)=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:t}),(0,c.jsx)(`td`,{children:(0,c.jsx)(i,{...e,flag:t,style:{height:18,width:24}})},t)]},n))})}),f=[`AllSVGFlags`,`AllFlagsSpan`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <table>
        <tbody>
            {icons.map((icon, i) => <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayFlagIcon {...args} name={icon} />
                    </td>
                </tr>)}
        </tbody>
    </table>`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <table>
        <tbody>
            {icons.map((icon, i) => <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayFlag {...args} flag={icon} style={{
          height: 18,
          width: 24
        }} />
                    </td>
                </tr>)}
        </tbody>
    </table>`,...d.parameters?.docs?.source}}}})))()}p();export{d as AllFlagsSpan,u as AllSVGFlags,f as __namedExportsOrder,l as default};