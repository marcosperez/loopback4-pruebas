/* eslint-disable @typescript-eslint/no-explicit-any */
import {inject, Component, CoreBindings, service} from '@loopback/core';
import {RestApplication} from '@loopback/rest';
import {WebSocketService} from '../services';

export class WebSocketComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: RestApplication,
    @service(WebSocketService) public wsService: WebSocketService,
  ) {
    wsService.start();
  }
}
