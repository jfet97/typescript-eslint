import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { LeftHandSideExpression } from '../../unions/LeftHandSideExpression';

export interface Decorator extends BaseNode {
  expression: LeftHandSideExpression;
  type: AST_NODE_TYPES.Decorator;
}
