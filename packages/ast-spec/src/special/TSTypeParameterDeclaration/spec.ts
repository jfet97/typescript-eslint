import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { TSTypeParameter } from '../TSTypeParameter/spec';

export interface TSTypeParameterDeclaration extends BaseNode {
  params: TSTypeParameter[];
  type: AST_NODE_TYPES.TSTypeParameterDeclaration;
}
