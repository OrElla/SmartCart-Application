import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

import {
  Row,
  Col,
  Icon,
  Grid,
  Badge,
  Panel,
  Button,
  isBrowser,
  PanelBody,
  LoremIpsum,
  FormControl,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
} from '@sketchpixy/rubix';

@withRouter
export default class Mail extends React.Component {
  handleClick(e) {
    this.props.router.push('/ltr/mailbox/compose');
  }

  handleBackClick(e) {
    this.props.router.push('/ltr/mailbox/inbox');
  }

  handleTextareaClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.handleClick();
  }

  print() {
    if (isBrowser()) {
      window.print();
    }
  }

  render() {
    return (
      <PanelContainer className='inbox'>
        <Panel>
          <PanelBody style={{paddingTop: 0}}>
            <Grid>
              <Row className='hidden-print'>
                <Col xs={8} style={{paddingTop: 12.5}}>
                  <ButtonToolbar className='inbox-toolbar'>
                    <ButtonGroup>
                      <Button outlined onlyOnHover bsStyle='darkgreen45' onClick={::this.handleBackClick}><Icon glyph='icon-dripicons-return'/></Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button bsStyle='blue' onClick={::this.handleClick}>
                        <Icon glyph='icon-fontello-edit-1'/>
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup className='hidden-xs'>
                      <Button outlined onlyOnHover bsStyle='darkgreen45'><Icon glyph='icon-fontello-reply'/></Button>
                      <Button outlined onlyOnHover bsStyle='darkgreen45'><Icon glyph='icon-fontello-reply-all-1'/></Button>
                      <Button outlined onlyOnHover bsStyle='darkgreen45'><Icon glyph='icon-fontello-forward'/></Button>
                    </ButtonGroup>
                    <ButtonGroup className='hidden-xs'>
                      <Button outlined onlyOnHover bsStyle='danger' className='text-center'><Icon glyph='icon-fontello-attention-alt'/></Button>
                      <Button outlined onlyOnHover bsStyle='danger'><Icon glyph='icon-fontello-trash-1'/></Button>
                    </ButtonGroup>
                    <ButtonGroup className='hidden-xs hidden-sm'>
                      <Button outlined onlyOnHover bsStyle='brown' className='text-center' onClick={::this.print}><Icon glyph='icon-outlined-printer'/></Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
                <Col xs={4} className='text-right'>
                  <div className='inbox-avatar'>
                    <img src='/imgs/app/avatars/avatar19.png' width='40' height='40' />
                    <div className='inbox-avatar-name hidden-xs hidden-sm'>
                      <div>Naor Levi</div>
                      <div><small>Compose</small></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
            <hr style={{margin: 0}}/>
            <Panel horizontal>
              <PanelBody className='panel-sm-9 panel-xs-12' style={{paddingTop: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <div className='inbox-avatar'>
                        <img src='/imgs/app/avatars/avatar5.png' width='40' height='40' className='border-green hidden-xs' />
                        <div className='inbox-avatar-name'>
                          <div className='fg-darkgrayishblue75'><strong>From: </strong>Jordyn Ouellet - <em>jordyn_ouellet@example.com</em></div>
                          <div className='fg-darkgray40'><strong>Subject: </strong>Regd financial projections for the next five years</div>
                        </div>
                        <div className='inbox-date fg-darkgray40 text-right hidden-xs'>
                          <div style={{position: 'relative', top: 5}}>
                            <Badge className='bg-blue fg-white'>
                              OPPORTUNITIES
                            </Badge>
                          </div>
                          <div style={{position: 'relative'}}><small>
                              Aug 21st, 11:30 PM
                            </small>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Grid>
                <hr style={{marginTop: 0}}/>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <p>
                        <strong>Hi Anna,</strong>
                      </p>
                      <p>
                        <LoremIpsum query='4s' />
                      </p>
                      <p>
                        <LoremIpsum query='2s' /><span>Bibendum est ultricies integer quis :</span>
                      </p>
                      <div>
                        <ul>
                          <li><LoremIpsum query='1s' /></li>
                          <li><LoremIpsum query='1s' /></li>
                          <li><LoremIpsum query='1s' /></li>
                          <li><LoremIpsum query='1s' /></li>
                        </ul>
                        <blockquote>
                          <LoremIpsum query='2s' />
                        </blockquote>
                      </div>
                      <p>
                        <LoremIpsum query='2s'/>
                      </p>
                      <div><strong>Regards,</strong></div>
                      <div><strong>Jordyn</strong></div>
                    </Col>
                  </Row>
                </Grid>
                <hr/>
                <Grid className='hidden-print'>
                  <Row>
                    <Col xs={12}>
                      <p>
                        <strong>Attachments</strong><span className='fg-darkgray40'> (3 files, 680 KB)</span>
                      </p>
                      <p className='inbox-attachments'>
                        <Icon glyph='icon-1-and-quarter-x icon-outlined-image' /><span><strong> force.gif</strong> <span className='fg-darkgray40'>(128 KB)</span></span>
                        <a className='inbox-attachment-download' href='#'>Download</a>
                      </p>
                      <p className='inbox-attachments'>
                        <Icon glyph='icon-1-and-quarter-x icon-outlined-image' /><span><strong> lightsaber.png</strong> <span className='fg-darkgray40'>(450 KB)</span></span>
                        <a className='inbox-attachment-download' href='#'>Download</a>
                      </p>
                      <p className='inbox-attachments' style={{marginBottom: 0}}>
                        <Icon glyph='icon-1-and-quarter-x devicon-html5-plain-wordmark' /><span><strong> hax.html</strong> <span className='fg-darkgray40'>(2 KB)</span></span>
                        <a className='inbox-attachment-download' href='#'>Download</a>
                      </p>
                    </Col>
                  </Row>
                </Grid>
                <hr className='hidden-print'/>
                <Grid className='hidden-print'>
                  <Row>
                    <Col xs={12}>
                      <FormControl componentClass="textarea" rows='5' onClick={::this.handleTextareaClick} onFocus={::this.handleTextareaClick} placeholder="Click here to reply" style={{marginBottom: 25}} />
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
