/*
 * Copyright 2017 Datalayer (http://datalayer.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  SpellBase,
  SpellResult,
  DefaultDisplayType,
} from 'zeppelin-spell';

import { sigma } from 'sigma'

export default class SigmaSpell extends SpellBase {
  constructor() {
    super("%sigma");
  }

  interpret(paragraphText) {

    const callback = (elemId => {

      const container = document.getElementById(elemId)

      // TODO Size should not be fixed.
      container.style.width = "1500px";
      container.style.height = "1000px";

      var g = JSON.parse(paragraphText);

      var s = new sigma({
        graph: g,
        container: container
      });

    })

    return new SpellResult(callback);

 }

}
